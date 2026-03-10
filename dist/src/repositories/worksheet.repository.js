"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../utilities/prisma");
class WorksheetRepository {
    async create(data) {
        try {
            const worksheet = await prisma_1.prisma.worksheet.create({
                data: {
                    title: data.title,
                    description: data.description,
                    order: data.order ?? 0,
                    workbook: {
                        connect: { id: data.workbookId }
                    }
                }
            });
            return worksheet;
        }
        catch (error) {
            throw error;
        }
    }
    async get(id) {
        try {
            const worksheet = await prisma_1.prisma.worksheet.findUnique({
                where: { id }
            });
            return worksheet;
        }
        catch (error) {
            throw error;
        }
    }
    async edit(id, data) {
        try {
            const worksheet = await prisma_1.prisma.worksheet.update({
                where: { id },
                data: {
                    ...(data.title && { title: data.title }),
                    ...(data.order !== undefined && { order: data.order }),
                    ...(data.isLocked !== undefined && { isLocked: data.isLocked }),
                    ...(data.yjsState && { yjsState: data.yjsState }),
                }
            });
            return worksheet;
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_1.prisma.worksheet.delete({
                where: { id }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async listByWorkbook(workbookId) {
        try {
            const worksheets = await prisma_1.prisma.worksheet.findMany({
                where: { workbookId },
                orderBy: { order: "asc" }
            });
            return worksheets;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = WorksheetRepository;
//# sourceMappingURL=worksheet.repository.js.map