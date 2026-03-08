import { Membership, Role } from "../../generated/prisma/index";
import MembershipRepository from "../../repositories/membership.repository";
import { IMembershipRepository, IMembershipStudentService } from "../../types/memberships.types";
import { prisma } from "../../utilities/prisma";

class MembershipStudentService implements IMembershipStudentService {
    private repository: IMembershipRepository

    constructor() {
        this.repository = new MembershipRepository()
    }

    private async validateTeacher(userId: string, workbookId: string): Promise<void> {
        const membership = await this.repository.getMembership(userId, workbookId)
        if (!membership || membership.role !== Role.TEACHER) {
            throw new Error("Only teachers of this workbook can manage students.")
        }
    }

    async addStudent(userId: string, targetUserId: string, workbookId: string): Promise<Membership> {
        try {
            await this.validateTeacher(userId, workbookId)

            // Check if target user is a system-wide student
            const targetUser = await prisma.user.findUnique({ where: { uid: targetUserId } })
            if (!targetUser) throw new Error("Student not found.")
            if (targetUser.role !== Role.STUDENT) {
                throw new Error("The user being added is not a student.")
            }

            // Check if already a member
            const existing = await this.repository.getMembership(targetUserId, workbookId)
            if (existing) throw new Error("User is already a member of this workbook.")

            return await this.repository.addMember({
                userId: targetUserId,
                workbookId,
                role: Role.STUDENT
            })
        } catch (error) {
            throw error
        }
    }

    async removeStudent(userId: string, targetUserId: string, workbookId: string): Promise<void> {
        try {
            await this.validateTeacher(userId, workbookId)

            const existing = await this.repository.getMembership(targetUserId, workbookId)
            if (!existing) throw new Error("Membership not found.")
            if (existing.role !== Role.STUDENT) {
                throw new Error("Teachers can only remove students.")
            }

            await this.repository.removeMember(targetUserId, workbookId)
        } catch (error) {
            throw error
        }
    }
}

export default MembershipStudentService
