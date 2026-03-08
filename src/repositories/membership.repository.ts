import { Membership, Role } from "../generated/prisma/index";
import { ICreateMembership, IMembershipRepository } from "../types/memberships.types";
import { prisma } from "../utilities/prisma";

class MembershipRepository implements IMembershipRepository {

    async addMember(data: ICreateMembership): Promise<Membership> {
        try {
            const membership = await prisma.membership.create({
                data: {
                    user: { connect: { uid: data.userId } },
                    workbook: { connect: { id: data.workbookId } },
                    role: data.role
                }
            })
            return membership
        } catch (error) {
            throw error
        }
    }

    async removeMember(userId: string, workbookId: string): Promise<void> {
        try {
            await prisma.membership.delete({
                where: {
                    userId_workbookId: { userId, workbookId }
                }
            })
        } catch (error) {
            throw error
        }
    }

    async updateRole(userId: string, workbookId: string, role: Role): Promise<Membership | null> {
        try {
            const updated = await prisma.membership.update({
                where: {
                    userId_workbookId: { userId, workbookId }
                },
                data: { role }
            })
            return updated
        } catch (error) {
            throw error
        }
    }

    async getMembership(userId: string, workbookId: string): Promise<Membership | null> {
        try {
            const membership = await prisma.membership.findUnique({
                where: {
                    userId_workbookId: { userId, workbookId }
                }
            })
            return membership
        } catch (error) {
            throw error
        }
    }

    async listByWorkbook(workbookId: string): Promise<Membership[]> {
        try {
            const memberships = await prisma.membership.findMany({
                where: { workbookId },
                include: {
                    user: {
                        select: {
                            uid: true,
                            username: true,
                            email: true,
                            role: true,
                            avatarUrl: true
                        }
                    }
                }
            })
            return memberships
        } catch (error) {
            throw error
        }
    }
}

export default MembershipRepository
