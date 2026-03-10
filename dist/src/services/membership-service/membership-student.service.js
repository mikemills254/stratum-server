"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../prisma/generated/prisma");
const membership_repository_1 = __importDefault(require("../../repositories/membership.repository"));
const prisma_2 = require("../../utilities/prisma");
class MembershipStudentService {
    constructor() {
        this.repository = new membership_repository_1.default();
    }
    async validateTeacher(userId, workbookId) {
        const membership = await this.repository.getMembership(userId, workbookId);
        if (!membership || membership.role !== prisma_1.Role.TEACHER) {
            throw new Error("Only teachers of this workbook can manage students.");
        }
    }
    async addStudent(userId, targetUserId, workbookId) {
        try {
            await this.validateTeacher(userId, workbookId);
            // Check if target user is a system-wide student
            const targetUser = await prisma_2.prisma.user.findUnique({ where: { uid: targetUserId } });
            if (!targetUser)
                throw new Error("Student not found.");
            if (targetUser.role !== prisma_1.Role.STUDENT) {
                throw new Error("The user being added is not a student.");
            }
            // Check if already a member
            const existing = await this.repository.getMembership(targetUserId, workbookId);
            if (existing)
                throw new Error("User is already a member of this workbook.");
            return await this.repository.addMember({
                userId: targetUserId,
                workbookId,
                role: prisma_1.Role.STUDENT
            });
        }
        catch (error) {
            throw error;
        }
    }
    async removeStudent(userId, targetUserId, workbookId) {
        try {
            await this.validateTeacher(userId, workbookId);
            const existing = await this.repository.getMembership(targetUserId, workbookId);
            if (!existing)
                throw new Error("Membership not found.");
            if (existing.role !== prisma_1.Role.STUDENT) {
                throw new Error("Teachers can only remove students.");
            }
            await this.repository.removeMember(targetUserId, workbookId);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = MembershipStudentService;
//# sourceMappingURL=membership-student.service.js.map