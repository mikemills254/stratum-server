import { AuditLog, AuditLogType } from "../../prisma/generated/prisma";
import { prisma } from "../utilities/prisma";

export interface ICreateAuditLog {
    type: AuditLogType;
    title: string;
    description?: string;
    metadata?: any;
    userId: string;
    workbookId?: string;
}

export class AuditLogRepository {
    async create(data: ICreateAuditLog): Promise<AuditLog> {
        return prisma.auditLog.create({
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

    async getByUserId(userId: string, limit: number = 20): Promise<AuditLog[]> {
        return prisma.auditLog.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: limit
        });
    }

    async getByWorkbookId(workbookId: string, limit: number = 20): Promise<AuditLog[]> {
        return prisma.auditLog.findMany({
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

    async getForDirector(directorId: string, limit: number = 20): Promise<AuditLog[]> {
        // Director sees activity for all workbooks they own
        return prisma.auditLog.findMany({
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

    async getForTeacher(teacherId: string, workbookId: string, limit: number = 20): Promise<AuditLog[]> {
        // Teacher sees activity in a specific workbook where they are a member
        // For now, simple fetch by workbookId (assuming authorization is handled in service)
        return this.getByWorkbookId(workbookId, limit);
    }
}
