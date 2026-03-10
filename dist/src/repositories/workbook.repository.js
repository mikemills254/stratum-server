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
                where: { id }
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
    async getStats(id) {
        try {
            const [teachers, studentCount] = await Promise.all([
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
                prisma_2.prisma.membership.count({
                    where: { workbookId: id, role: "STUDENT" }
                })
            ]);
            return {
                teacherCount: teachers.length,
                studentCount: studentCount,
                teachers: teachers.map(m => m.user)
            };
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = WorkbookRepository;
//# sourceMappingURL=workbook.repository.js.map