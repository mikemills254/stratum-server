import { AuditLog } from "../../../prisma/generated/prisma";
import { ICreateAuditLog } from "../../repositories/audit-log.repository";
export declare class AuditLogService {
    private repository;
    constructor();
    createLog(data: ICreateAuditLog): Promise<AuditLog>;
    getLogs(userId: string, role: string, workbookId?: string, limit?: number): Promise<AuditLog[]>;
}
//# sourceMappingURL=audit-log.service.d.ts.map