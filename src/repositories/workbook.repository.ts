import { Role, Workbook } from "../../prisma/generated/prisma";
import { ICreateWorkBook, ISearchWorkBook, IWorkbookRepository } from "../types/workbooks.types";
import { prisma } from "../utilities/prisma";

class WorkbookRepository implements IWorkbookRepository {

    async create(data: ICreateWorkBook): Promise<Workbook> {
        try {
            const workbook = await prisma.workbook.create({
                data: {
                    name: data.name,
                    description: data.description,
                    tag: data.tag,
                    isPrivate: data.isPrivate ?? false,
                    director: {
                        connect: { uid: data.directorId }
                    },
                    memberships: {
                        create: {
                            userId: data.directorId,
                            role: Role.DIRECTOR
                        }
                    }
                }
            })
            return workbook
        } catch (error) {
            throw error
        }
    }

    async get(id: string): Promise<Workbook | null> {
        try {
            const workbook = await prisma.workbook.findUnique({
                where: { id },
                include: {
                    worksheets: {
                        orderBy: { createdAt: 'asc' },
                        include: {
                            questions: {
                                orderBy: { createdAt: 'asc' }
                            }
                        }
                    }
                }
            })
            return workbook
        } catch (error) {
            throw error
        }
    }

    async edit(id: string, data: Partial<ICreateWorkBook>): Promise<Workbook | null> {
        try {
            const workbook = await prisma.workbook.update({
                where: { id },
                data: {
                    ...(data.name && { name: data.name }),
                    ...(data.description && { description: data.description }),
                    ...(data.tag && { tag: data.tag }),
                    ...(data.isPrivate !== undefined && { isPrivate: data.isPrivate }),
                }
            })
            return workbook
        } catch (error) {
            throw error
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await prisma.workbook.delete({
                where: { id }
            })
        } catch (error) {
            throw error
        }
    }

    async search(params: ISearchWorkBook): Promise<Workbook[]> {
        try {
            const workbooks = await prisma.workbook.findMany({
                where: {
                    isArchived: false,
                    AND: [
                        ...(params.query ? [{
                            OR: [
                                { name: { contains: params.query, mode: "insensitive" as const } },
                                { description: { contains: params.query, mode: "insensitive" as const } },
                                { tag: { contains: params.query, mode: "insensitive" as const } },
                            ]
                        }] : []),
                        ...(params.directorId ? [{ directorId: params.directorId }] : []),
                        ...(params.tag ? [{ tag: { contains: params.tag, mode: "insensitive" as const } }] : []),
                        ...(params.workbookIds ? [{ id: { in: params.workbookIds } }] : []),
                    ]
                },
                include: {
                    _count: {
                        select: {
                            worksheets: true,
                            memberships: true
                        }
                    }
                },
                orderBy: { createdAt: "desc" },
                take: params.limit ?? 20,
                skip: params.offset ?? 0,
            })
            return workbooks as any;
        } catch (error) {
            throw error
        }
    }

    async searchPublic(userId: string, params: ISearchWorkBook): Promise<Workbook[]> {
        try {
            const workbooks = await prisma.workbook.findMany({
                where: {
                    isArchived: false,
                    memberships: {
                        none: { userId }
                    },
                    AND: [
                        ...(params.query ? [{
                            OR: [
                                { name: { contains: params.query, mode: "insensitive" as const } },
                                { description: { contains: params.query, mode: "insensitive" as const } },
                                { tag: { contains: params.query, mode: "insensitive" as const } },
                            ]
                        }] : []),
                        ...(params.tag ? [{ tag: { contains: params.tag, mode: "insensitive" as const } }] : []),
                    ]
                },
                include: {
                    _count: {
                        select: {
                            worksheets: true,
                        }
                    },
                    memberships: {
                        where: { role: Role.STUDENT },
                        select: { id: true }
                    },
                    director: {
                        select: {
                            username: true,
                            avatarUrl: true
                        }
                    }
                },
                orderBy: { createdAt: "desc" },
                take: params.limit ?? 20,
                skip: params.offset ?? 0,
            })

            // Map and inject student count
            return workbooks.map((w: any) => ({
                ...w,
                _count: {
                    worksheets: w._count.worksheets,
                    students: w.memberships.length
                }
            })) as any;
        } catch (error) {
            throw error
        }
    }

    async getStats(id: string): Promise<any> {
        try {
            const [workbook, teachers, students] = await Promise.all([
                prisma.workbook.findUnique({
                    where: { id },
                    include: {
                        worksheets: {
                            include: {
                                _count: { select: { questions: true } }
                            }
                        }
                    }
                }),
                prisma.membership.findMany({
                    where: { workbookId: id, role: "TEACHER" },
                    include: {
                        user: {
                            select: {
                                uid: true,
                                username: true,
                                email: true,
                                avatarUrl: true
                            }
                        }
                    }
                }),
                prisma.membership.findMany({
                    where: { workbookId: id, role: "STUDENT" },
                    include: {
                        user: {
                            include: {
                                answers: {
                                    where: {
                                        question: {
                                            worksheet: { workbookId: id }
                                        }
                                    },
                                    select: { status: true }
                                }
                            }
                        }
                    }
                })
            ]);

            const totalQuestions = workbook?.worksheets.reduce((acc, ws) => acc + ws._count.questions, 0) || 0;

            const studentProgress = students.map(m => {
                const completed = m.user.answers.filter(a => a.status === 'SUBMITTED' || a.status === 'GRADED').length;
                const graded = m.user.answers.filter(a => a.status === 'GRADED').length;
                return {
                    uid: m.user.uid,
                    username: m.user.username,
                    email: m.user.email,
                    avatarUrl: m.user.avatarUrl,
                    completedCount: completed,
                    gradedCount: graded,
                    progress: totalQuestions > 0 ? Math.round((completed / totalQuestions) * 100) : 0
                };
            });

            // Get grading activity for teachers
            const pendingGrades = await prisma.grade.groupBy({
                by: ['teacherId'],
                where: {
                    status: 'PENDING',
                    answer: { question: { worksheet: { workbookId: id } } }
                },
                _count: true
            });

            return {
                totalQuestions,
                teacherCount: teachers.length,
                studentCount: students.length,
                teachers: teachers.map(m => ({
                    ...m.user,
                    pendingApprovals: pendingGrades.find(pg => pg.teacherId === m.user.uid)?._count || 0
                })),
                students: studentProgress
            };
        } catch (error) {
            throw error;
        }
    }
}

export default WorkbookRepository