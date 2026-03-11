import { AuditLog, AuditLogType } from "../../prisma/generated/prisma";
export interface ICreateAuditLog {
    type: AuditLogType;
    title: string;
    description?: string;
    metadata?: any;
    userId: string;
    workbookId?: string;
}
export declare class AuditLogRepository {
    create(data: ICreateAuditLog): Promise<AuditLog>;
    getByUserId(userId: string, limit?: number): Promise<AuditLog[]>;
    getByWorkbookId(workbookId: string, limit?: number): Promise<AuditLog[]>;
    getForDirector(directorId: string, limit?: number): Promise<AuditLog[]>;
    getForTeacher(teacherId: string, workbookId: string, limit?: number): Promise<AuditLog[]>;
}
//# sourceMappingURL=audit-log.repository.d.ts.map