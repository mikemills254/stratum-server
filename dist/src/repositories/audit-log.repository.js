"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogRepository = void 0;
const prisma_1 = require("../utilities/prisma");
class AuditLogRepository {
    async create(data) {
        return prisma_1.prisma.auditLog.create({
            data: {
                type: data.type,
                title: data.title,
                description: data.description,
                metadata: data.metadata,
                user: { connect: { uid: data.userId } },
                ...(data.workbookId && { workbook: { connect: { id: data.workbookId } } })
            }
        });
    }
    async getByUserId(userId, limit = 20) {
        return prisma_1.prisma.auditLog.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: limit
        });
    }
    async getByWorkbookId(workbookId, limit = 20) {
        return prisma_1.prisma.auditLog.findMany({
            where: { workbookId },
            include: {
                user: {
                    select: {
                        username: true,
                        avatarUrl: true,
                        role: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
            take: limit
        });
    }
    async getForDirector(directorId, limit = 20) {
        // Director sees activity for all workbooks they own
        return prisma_1.prisma.auditLog.findMany({
            where: {
                workbook: {
                    directorId: directorId
                }
            },
            include: {
                user: {
                    select: {
                        username: true,
                        avatarUrl: true,
                        role: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
            take: limit
        });
    }
    async getForTeacher(teacherId, workbookId, limit = 20) {
        // Teacher sees activity in a specific workbook where they are a member
        // For now, simple fetch by workbookId (assuming authorization is handled in service)
        return this.getByWorkbookId(workbookId, limit);
    }
}
exports.AuditLogRepository = AuditLogRepository;
//# sourceMappingURL=audit-log.repository.js.map