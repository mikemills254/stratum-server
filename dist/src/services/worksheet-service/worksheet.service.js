"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../prisma/generated/prisma");
const worksheet_repository_1 = __importDefault(require("../../repositories/worksheet.repository"));
const prisma_2 = require("../../utilities/prisma");
class WorksheetService {
    constructor() {
        this.repository = new worksheet_repository_1.default();
    }
    async validateAccess(userId, workbookId, requiredRole) {
        const user = await prisma_2.prisma.user.findUnique({ where: { uid: userId } });
        if (!user)
            throw new Error("User not found.");
        const workbook = await prisma_2.prisma.workbook.findUnique({ where: { id: workbookId } });
        if (!workbook)
            throw new Error("Workbook not found.");
        // Director of the workbook always has full access
        if (workbook.directorId === userId)
            return;
        // Check membership for Teachers
        const membership = await prisma_2.prisma.membership.findUnique({
            where: {
                userId_workbookId: { userId, workbookId }
            }
        });
        if (!membership)
            throw new Error("You do not have access to this workbook.");
        if (requiredRole && membership.role !== requiredRole) {
            throw new Error(`Access denied. ${requiredRole} role required.`);
        }
    }
    async createWorksheet(userId, data) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            if (!data.title || typeof data.title !== "string")
                throw new Error("Title is required and must be a string.");
            if (!data.workbookId)
                throw new Error("Workbook ID is required.");
            await this.validateAccess(userId, data.workbookId, prisma_1.Role.DIRECTOR);
            return await this.repository.create(data);
        }
        catch (error) {
            throw error;
        }
    }
    async getWorksheet(userId, worksheetId) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            if (!worksheetId)
                throw new Error("Worksheet ID is required.");
            const worksheet = await this.repository.get(worksheetId);
            if (!worksheet)
                throw new Error("Worksheet not found.");
            await this.validateAccess(userId, worksheet.workbookId);
            return worksheet;
        }
        catch (error) {
            throw error;
        }
    }
    async editWorksheet(userId, worksheetId, data) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            if (!worksheetId)
                throw new Error("Worksheet ID is required.");
            const existing = await this.repository.get(worksheetId);
            if (!existing)
                throw new Error("Worksheet not found.");
            await this.validateAccess(userId, existing.workbookId, prisma_1.Role.DIRECTOR);
            if (data.title !== undefined && typeof data.title !== "string") {
                throw new Error("Title must be a string.");
            }
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
            if (!userId)
                throw new Error("User ID is required.");
            if (!worksheetId)
                throw new Error("Worksheet ID is required.");
            const existing = await this.repository.get(worksheetId);
            if (!existing)
                throw new Error("Worksheet not found.");
            await this.validateAccess(userId, existing.workbookId, prisma_1.Role.DIRECTOR);
            await this.repository.delete(worksheetId);
        }
        catch (error) {
            throw error;
        }
    }
    async getWorksheetsByWorkbook(userId, workbookId) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            if (!workbookId)
                throw new Error("Workbook ID is required.");
            await this.validateAccess(userId, workbookId);
            return await this.repository.listByWorkbook(workbookId);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = WorksheetService;
//# sourceMappingURL=worksheet.service.js.map