"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../generated/prisma/index");
const membership_repository_1 = __importDefault(require("../../repositories/membership.repository"));
const prisma_1 = require("../../utilities/prisma");
class MembershipService {
    constructor() {
        this.repository = new membership_repository_1.default();
    }
    async validateDirector(userId, workbookId) {
        const user = await prisma_1.prisma.user.findUnique({ where: { uid: userId } });
        if (!user || user.role !== index_1.Role.DIRECTOR) {
            throw new Error("Only Directors can manage memberships.");
        }
        const workbook = await prisma_1.prisma.workbook.findUnique({ where: { id: workbookId } });
        if (!workbook)
            throw new Error("Workbook not found.");
        if (workbook.directorId !== userId) {
            throw new Error("You do not own this workbook.");
        }
    }
    async addMember(userId, data) {
        try {
            await this.validateDirector(userId, data.workbookId);
            // Check if user exists and is a teacher
            const targetUser = await prisma_1.prisma.user.findUnique({ where: { uid: data.userId } });
            if (!targetUser)
                throw new Error("User to add not found.");
            if (targetUser.role !== index_1.Role.TEACHER) {
                throw new Error("Only Teachers can be added to workbooks.");
            }
            // Check if already a member
            const existing = await this.repository.getMembership(data.userId, data.workbookId);
            if (existing)
                throw new Error("User is already a member of this workbook.");
            return await this.repository.addMember(data);
        }
        catch (error) {
            throw error;
        }
    }
    async removeMember(userId, targetUserId, workbookId) {
        try {
            await this.validateDirector(userId, workbookId);
            if (userId === targetUserId) {
                throw new Error("Owners cannot remove themselves. Delete the workbook instead.");
            }
            const existing = await this.repository.getMembership(targetUserId, workbookId);
            if (!existing)
                throw new Error("Membership not found.");
            await this.repository.removeMember(targetUserId, workbookId);
        }
        catch (error) {
            throw error;
        }
    }
    async updateMemberRole(userId, targetUserId, workbookId, role) {
        try {
            await this.validateDirector(userId, workbookId);
            const existing = await this.repository.getMembership(targetUserId, workbookId);
            if (!existing)
                throw new Error("Membership not found.");
            const updated = await this.repository.updateRole(targetUserId, workbookId, role);
            if (!updated)
                throw new Error("Failed to update membership role.");
            return updated;
        }
        catch (error) {
            throw error;
        }
    }
    async getMembershipsByWorkbook(userId, workbookId) {
        try {
            // Check access: must be the director or a member
            const membership = await prisma_1.prisma.membership.findUnique({
                where: {
                    userId_workbookId: { userId, workbookId }
                }
            });
            const workbook = await prisma_1.prisma.workbook.findUnique({ where: { id: workbookId } });
            if (!workbook)
                throw new Error("Workbook not found.");
            if (!membership && workbook.directorId !== userId) {
                throw new Error("Access denied.");
            }
            return await this.repository.listByWorkbook(workbookId);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = MembershipService;
//# sourceMappingURL=membership.service.js.map