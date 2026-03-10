"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../utilities/prisma");
const prisma_2 = require("../../prisma/generated/prisma");
class UserController {
    async handleSearchTeachers(req, res) {
        try {
            const user = req.user;
            if (!user || user.role !== prisma_2.Role.DIRECTOR) {
                return res.status(403).json({
                    message: "Only Directors can search for teachers.",
                    success: false
                });
            }
            const { query, workbookId } = req.query;
            if (!query || typeof query !== 'string') {
                return res.status(400).json({
                    message: "Search query is required.",
                    success: false
                });
            }
            const teachers = await prisma_1.prisma.user.findMany({
                where: {
                    role: prisma_2.Role.TEACHER,
                    OR: [
                        { email: { contains: query, mode: 'insensitive' } },
                        { username: { contains: query, mode: 'insensitive' } }
                    ]
                },
                select: {
                    uid: true,
                    username: true,
                    email: true,
                    avatarUrl: true
                },
                take: 10
            });
            let teachersWithMembership = teachers;
            if (workbookId && typeof workbookId === 'string') {
                const memberships = await prisma_1.prisma.membership.findMany({
                    where: {
                        workbookId: workbookId,
                        userId: { in: teachers.map(t => t.uid) }
                    }
                });
                const memberIds = new Set(memberships.map(m => m.userId));
                teachersWithMembership = teachers.map(t => ({
                    ...t,
                    isMember: memberIds.has(t.uid)
                }));
            }
            return res.status(200).json({
                message: "Success",
                data: teachersWithMembership,
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map