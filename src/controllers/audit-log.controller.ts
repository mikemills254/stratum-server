import { Request, Response } from "express";
import { AuditLogService } from "../services/audit-log-service/audit-log.service";

export class AuditLogController {
    private service: AuditLogService;

    constructor() {
        this.service = new AuditLogService();
    }

    async handleGetLogs(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({
                    message: "Unauthorised",
                    success: false
                });
            }

            const { workbookId, limit } = req.query;
            const role = (user as any).role; // Assuming role is attached to user in middleware

            const logs = await this.service.getLogs(
                user.uid,
                role,
                workbookId as string,
                limit ? parseInt(limit as string) : 20
            );

            return res.status(200).json({
                message: "Success",
                data: logs,
                success: true
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}
