"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../utilities/prisma");
class WorkbookRepository {
    async create(data) {
        try {
            const workbook = await prisma_1.prisma.workbook.create({
                data: {
                    name: data.name,
                    description: data.description,
                    tag: data.tag,
                    director: {
                        connect: { uid: data.directorId }
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
            const workbook = await prisma_1.prisma.workbook.findUnique({
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
            const workbook = await prisma_1.prisma.workbook.update({
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
            await prisma_1.prisma.workbook.delete({
                where: { id }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async search(params) {
        try {
            const workbooks = await prisma_1.prisma.workbook.findMany({
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
}
exports.default = WorkbookRepository;
//# sourceMappingURL=workbook.repository.js.map