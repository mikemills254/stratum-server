"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../prisma/generated/prisma");
const prisma_2 = require("../utilities/prisma");
class WorkbookRepository {
    async create(data) {
        try {
            const workbook = await prisma_2.prisma.workbook.create({
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
                            role: prisma_1.Role.DIRECTOR
                        }
                    }
                }
            });
            return workbook;
        }
        catch (error) {
            throw error;
        }
    }
    async get(id) {
        try {
            const workbook = await prisma_2.prisma.workbook.findUnique({
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
            });
            return workbook;
        }
        catch (error) {
            throw error;
        }
    }
    async edit(id, data) {
        try {
            const workbook = await prisma_2.prisma.workbook.update({
                where: { id },
                data: {
                    ...(data.name && { name: data.name }),
                    ...(data.description && { description: data.description }),
                    ...(data.tag && { tag: data.tag }),
                    ...(data.isPrivate !== undefined && { isPrivate: data.isPrivate }),
                }
            });
            return workbook;
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_2.prisma.workbook.delete({
                where: { id }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async search(params) {
        try {
            const workbooks = await prisma_2.prisma.workbook.findMany({
                where: {
                    isArchived: false,
                    AND: [
                        ...(params.query ? [{
                                OR: [
                                    { name: { contains: params.query, mode: "insensitive" } },
                                    { description: { contains: params.query, mode: "insensitive" } },
                                    { tag: { contains: params.query, mode: "insensitive" } },
                                ]
                            }] : []),
                        ...(params.directorId ? [{ directorId: params.directorId }] : []),
                        ...(params.tag ? [{ tag: { contains: params.tag, mode: "insensitive" } }] : []),
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
            });
            return workbooks;
        }
        catch (error) {
            throw error;
        }
    }
    async searchPublic(userId, params) {
        try {
            const workbooks = await prisma_2.prisma.workbook.findMany({
                where: {
                    isArchived: false,
                    memberships: {
                        none: { userId }
                    },
                    AND: [
                        ...(params.query ? [{
                                OR: [
                                    { name: { contains: params.query, mode: "insensitive" } },
                                    { description: { contains: params.query, mode: "insensitive" } },
                                    { tag: { contains: params.query, mode: "insensitive" } },
                                ]
                            }] : []),
                        ...(params.tag ? [{ tag: { contains: params.tag, mode: "insensitive" } }] : []),
                    ]
                },
                include: {
                    _count: {
                        select: {
                            worksheets: true,
                        }
                    },
                    memberships: {
                        where: { role: prisma_1.Role.STUDENT },
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
            });
            // Map and inject student count
            return workbooks.map((w) => ({
                ...w,
                _count: {
                    worksheets: w._count.worksheets,
                    students: w.memberships.length
                }
            }));
        }
        catch (error) {
            throw error;
        }
    }
    async getStats(id) {
        try {
            const [workbook, teachers, students] = await Promise.all([
                prisma_2.prisma.workbook.findUnique({
                    where: { id },
                    include: {
                        worksheets: {
                            include: {
                                _count: { select: { questions: true } }
                            }
                        }
                    }
                }),
                prisma_2.prisma.membership.findMany({
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
                prisma_2.prisma.membership.findMany({
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
            const pendingGrades = await prisma_2.prisma.grade.groupBy({
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
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = WorkbookRepository;
//# sourceMappingURL=workbook.repository.js.map