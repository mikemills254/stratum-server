"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogController = void 0;
const audit_log_service_1 = require("../services/audit-log-service/audit-log.service");
class AuditLogController {
    constructor() {
        this.service = new audit_log_service_1.AuditLogService();
    }
    async handleGetLogs(req, res) {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({
                    message: "Unauthorised",
                    success: false
                });
            }
            const { workbookId, limit } = req.query;
            const role = user.role; // Assuming role is attached to user in middleware
            const logs = await this.service.getLogs(user.uid, role, workbookId, limit ? parseInt(limit) : 20);
            return res.status(200).json({
                message: "Success",
                data: logs,
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
exports.AuditLogController = AuditLogController;
//# sourceMappingURL=audit-log.controller.js.map