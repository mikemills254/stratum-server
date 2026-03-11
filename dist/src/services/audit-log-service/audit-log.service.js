"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogService = void 0;
const audit_log_repository_1 = require("../../repositories/audit-log.repository");
class AuditLogService {
    constructor() {
        this.repository = new audit_log_repository_1.AuditLogRepository();
    }
    async createLog(data) {
        return this.repository.create(data);
    }
    async getLogs(userId, role, workbookId, limit = 20) {
        if (role === 'DIRECTOR') {
            return this.repository.getForDirector(userId, limit);
        }
        else if (role === 'TEACHER' && workbookId) {
            return this.repository.getForTeacher(userId, workbookId, limit);
        }
        else {
            // Students see their own logs
            return this.repository.getByUserId(userId, limit);
        }
    }
}
exports.AuditLogService = AuditLogService;
//# sourceMappingURL=audit-log.service.js.map