"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const worksheet_repository_1 = __importDefault(require("../../repositories/worksheet.repository"));
const prisma_2 = require("../../utilities/prisma");
class WorksheetService {
    constructor() {
        this.repository = new worksheet_repository_1.default();
    }
    async validateDirector(userId, workbookId) {
        const user = await prisma_2.prisma.user.findUnique({ where: { uid: userId } });
        if (!user || user.role !== prisma_1.Role.DIRECTOR) {
            throw new Error("Only Directors can modify worksheets.");
        }
        const workbook = await prisma_2.prisma.workbook.findUnique({ where: { id: workbookId } });
        if (!workbook)
            throw new Error("Workbook not found.");
        if (workbook.directorId !== userId) {
            throw new Error("You do not own this workbook.");
        }
    }
    async validateMembership(userId, workbookId) {
        const membership = await prisma_2.prisma.membership.findUnique({
            where: {
                userId_workbookId: { userId, workbookId }
            }
        });
        if (!membership)
            throw new Error("You do not have access to this workbook.");
    }
    async createWorksheet(userId, data) {
        try {
            await this.validateDirector(userId, data.workbookId);
            return await this.repository.create(data);
        }
        catch (error) {
            throw error;
        }
    }
    async getWorksheet(userId, worksheetId) {
        try {
            const worksheet = await this.repository.get(worksheetId);
            if (!worksheet)
                throw new Error("Worksheet not found.");
            await this.validateMembership(userId, worksheet.workbookId);
            return worksheet;
        }
        catch (error) {
            throw error;
        }
    }
    async editWorksheet(userId, worksheetId, data) {
        try {
            const existing = await this.repository.get(worksheetId);
            if (!existing)
                throw new Error("Worksheet not found.");
            await this.validateDirector(userId, existing.workbookId);
            const updated = await this.repository.edit(worksheetId, data);
            if (!updated)
                throw new Error("Failed to update worksheet.");
            return updated;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteWorksheet(userId, worksheetId) {
        try {
            const existing = await this.repository.get(worksheetId);
            if (!existing)
                throw new Error("Worksheet not found.");
            await this.validateDirector(userId, existing.workbookId);
            await this.repository.delete(worksheetId);
        }
        catch (error) {
            throw error;
        }
    }
    async getWorksheetsByWorkbook(userId, workbookId) {
        try {
            await this.validateMembership(userId, workbookId);
            return await this.repository.listByWorkbook(workbookId);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = WorksheetService;
//# sourceMappingURL=worksheet.service.js.map