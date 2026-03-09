import { Membership, Role } from "../../../prisma/generated/prisma";
import MembershipRepository from "../../repositories/membership.repository";
import { ICreateMembership, IMembershipRepository, IMembershipService } from "../../types/memberships.types";
import { prisma } from "../../utilities/prisma";

class MembershipService implements IMembershipService {
    private repository: IMembershipRepository

    constructor() {
        this.repository = new MembershipRepository()
    }

    private async validateDirector(userId: string, workbookId: string): Promise<void> {
        const user = await prisma.user.findUnique({ where: { uid: userId } })
        if (!user || user.role !== Role.DIRECTOR) {
            throw new Error("Only Directors can manage memberships.")
        }

        const workbook = await prisma.workbook.findUnique({ where: { id: workbookId } })
        if (!workbook) throw new Error("Workbook not found.")
        if (workbook.directorId !== userId) {
            throw new Error("You do not own this workbook.")
        }
    }

    async addMember(userId: string, data: ICreateMembership): Promise<Membership> {
        try {
            await this.validateDirector(userId, data.workbookId)

            // Check if user exists and is a teacher
            const targetUser = await prisma.user.findUnique({ where: { uid: data.userId } })
            if (!targetUser) throw new Error("User to add not found.")
            if (targetUser.role !== Role.TEACHER) {
                throw new Error("Only Teachers can be added to workbooks.")
            }

            // Check if already a member
            const existing = await this.repository.getMembership(data.userId, data.workbookId)
            if (existing) throw new Error("User is already a member of this workbook.")

            return await this.repository.addMember(data)
        } catch (error) {
            throw error
        }
    }

    async removeMember(userId: string, targetUserId: string, workbookId: string): Promise<void> {
        try {
            await this.validateDirector(userId, workbookId)

            if (userId === targetUserId) {
                throw new Error("Owners cannot remove themselves. Delete the workbook instead.")
            }

            const existing = await this.repository.getMembership(targetUserId, workbookId)
            if (!existing) throw new Error("Membership not found.")

            await this.repository.removeMember(targetUserId, workbookId)
        } catch (error) {
            throw error
        }
    }

    async updateMemberRole(userId: string, targetUserId: string, workbookId: string, role: Role): Promise<Membership> {
        try {
            await this.validateDirector(userId, workbookId)

            const existing = await this.repository.getMembership(targetUserId, workbookId)
            if (!existing) throw new Error("Membership not found.")

            const updated = await this.repository.updateRole(targetUserId, workbookId, role)
            if (!updated) throw new Error("Failed to update membership role.")
            return updated
        } catch (error) {
            throw error
        }
    }

    async getMembershipsByWorkbook(userId: string, workbookId: string): Promise<Membership[]> {
        try {
            // Check access: must be the director or a member
            const membership = await prisma.membership.findUnique({
                where: {
                    userId_workbookId: { userId, workbookId }
                }
            })

            const workbook = await prisma.workbook.findUnique({ where: { id: workbookId } })
            if (!workbook) throw new Error("Workbook not found.")

            if (!membership && workbook.directorId !== userId) {
                throw new Error("Access denied.")
            }

            return await this.repository.listByWorkbook(workbookId)
        } catch (error) {
            throw error
        }
    }
}

export default MembershipService
