import { AuditLog, AuditLogType } from "../../../prisma/generated/prisma";
import { AuditLogRepository, ICreateAuditLog } from "../../repositories/audit-log.repository";

export class AuditLogService {
    private repository: AuditLogRepository;

    constructor() {
        this.repository = new AuditLogRepository();
    }

    async createLog(data: ICreateAuditLog): Promise<AuditLog> {
        return this.repository.create(data);
    }

    async getLogs(userId: string, role: string, workbookId?: string, limit: number = 20): Promise<AuditLog[]> {
        if (role === 'DIRECTOR') {
            return this.repository.getForDirector(userId, limit);
        } else if (role === 'TEACHER' && workbookId) {
            return this.repository.getForTeacher(userId, workbookId, limit);
        } else {
            // Students see their own logs
            return this.repository.getByUserId(userId, limit);
        }
    }
}
