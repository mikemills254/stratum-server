"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../prisma/generated/prisma");
const workbook_repository_1 = __importDefault(require("../../repositories/workbook.repository"));
const prisma_2 = require("../../utilities/prisma");
class WorkbookService {
    constructor() {
        this.repository = new workbook_repository_1.default;
    }
    // ── Only Directors can create/edit/delete workbooks
    async validateDirector(userId) {
        try {
            const user = await prisma_2.prisma.user.findUnique({
                where: { uid: userId }
            });
            if (!user)
                throw new Error("User not found.");
            return user.role === prisma_1.Role.DIRECTOR;
        }
        catch (error) {
            throw error;
        }
    }
    // ── Any member of the workbook can read it
    async validateMembership(userId, workbookId) {
        try {
            const membership = await prisma_2.prisma.membership.findUnique({
                where: {
                    userId_workbookId: { userId, workbookId }
                }
            });
            return !!membership;
        }
        catch (error) {
            throw error;
        }
    }
    async createWorkbook(userId, data) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            const { name, description, tag } = data;
            if (!name || typeof name !== "string") {
                throw new Error("Workbook name is required and must be a string.");
            }
            if (!await this.validateDirector(userId)) {
                throw new Error("Only Directors can create workbooks.");
            }
            const workbook = await this.repository.create({
                name,
                description,
                tag,
                directorId: userId
            });
            return workbook;
        }
        catch (error) {
            throw error;
        }
    }
    async getWorkbook(userId, workbookId) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            if (!workbookId)
                throw new Error("Workbook ID is required.");
            const isMember = await this.validateMembership(userId, workbookId);
            if (!isMember)
                throw new Error("You do not have access to this workbook.");
            const workbook = await this.repository.get(workbookId);
            if (!workbook)
                throw new Error("Workbook not found.");
            return workbook;
        }
        catch (error) {
            throw error;
        }
    }
    async editWorkbook(userId, workbookId, data) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            if (!workbookId)
                throw new Error("Workbook ID is required.");
            if (!await this.validateDirector(userId)) {
                throw new Error("Only Directors can edit workbooks.");
            }
            // Make sure the director owns this specific workbook
            const existing = await this.repository.get(workbookId);
            if (!existing)
                throw new Error("Workbook not found.");
            if (existing.directorId !== userId) {
                throw new Error("You do not own this workbook.");
            }
            const { name, description, tag } = data;
            if (name && typeof name !== "string") {
                throw new Error("Workbook name must be a string.");
            }
            const updated = await this.repository.edit(workbookId, {
                ...(name && { name }),
                ...(description !== undefined && { description }),
                ...(tag !== undefined && { tag }),
            });
            if (!updated)
                throw new Error("Failed to update workbook.");
            return updated;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteWorkbook(userId, workbookId) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            if (!workbookId)
                throw new Error("Workbook ID is required.");
            if (!await this.validateDirector(userId)) {
                throw new Error("Only Directors can delete workbooks.");
            }
            const existing = await this.repository.get(workbookId);
            if (!existing)
                throw new Error("Workbook not found.");
            if (existing.directorId !== userId) {
                throw new Error("You do not own this workbook.");
            }
            await this.repository.delete(workbookId);
        }
        catch (error) {
            throw error;
        }
    }
    async searchWorkbooks(userId, params) {
        try {
            if (!userId)
                throw new Error("User ID is required.");
            // Scope search to workbooks the user is a member of
            const memberships = await prisma_2.prisma.membership.findMany({
                where: { userId },
                select: { workbookId: true }
            });
            const accessibleIds = memberships.map((m) => m.workbookId);
            if (accessibleIds.length === 0)
                return [];
            const workbooks = await this.repository.search({
                ...params,
                workbookIds: accessibleIds
            });
            return workbooks;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = WorkbookService;
//# sourceMappingURL=workbook.service.js.map