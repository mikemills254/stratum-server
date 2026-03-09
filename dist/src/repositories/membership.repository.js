"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../utilities/prisma");
class MembershipRepository {
    async addMember(data) {
        try {
            const membership = await prisma_1.prisma.membership.create({
                data: {
                    user: { connect: { uid: data.userId } },
                    workbook: { connect: { id: data.workbookId } },
                    role: data.role
                }
            });
            return membership;
        }
        catch (error) {
            throw error;
        }
    }
    async removeMember(userId, workbookId) {
        try {
            await prisma_1.prisma.membership.delete({
                where: {
                    userId_workbookId: { userId, workbookId }
                }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async updateRole(userId, workbookId, role) {
        try {
            const updated = await prisma_1.prisma.membership.update({
                where: {
                    userId_workbookId: { userId, workbookId }
                },
                data: { role }
            });
            return updated;
        }
        catch (error) {
            throw error;
        }
    }
    async getMembership(userId, workbookId) {
        try {
            const membership = await prisma_1.prisma.membership.findUnique({
                where: {
                    userId_workbookId: { userId, workbookId }
                }
            });
            return membership;
        }
        catch (error) {
            throw error;
        }
    }
    async listByWorkbook(workbookId) {
        try {
            const memberships = await prisma_1.prisma.membership.findMany({
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
            });
            return memberships;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = MembershipRepository;
//# sourceMappingURL=membership.repository.js.map