import express, { NextFunction, Request, Response } from "express";
import AuthService from "../middlewares/auth-middlware";
import { AuditLogController } from "../controllers/audit-log.controller";

const router = express.Router();
const controller = new AuditLogController();

router.get("/", AuthService.verify, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.handleGetLogs(req, res);
    } catch (error) {
        next(error);
    }
});

export default router;
