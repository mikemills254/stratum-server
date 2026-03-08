import { Request, Response } from "express";
import { GradeService } from "../services/grade-service/grade.service";

export class GradeController {
    private service: GradeService;

    constructor() {
        this.service = new GradeService();
    }

    async handleAssignGrade(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            if (!user || user.role !== "TEACHER") {
                return res.status(403).json({ message: "Only teachers can assign grades", success: false });
            }

            const { answerId, score, feedback } = req.body;
            if (!answerId || score === undefined) {
                return res.status(400).json({ message: "Answer ID and score are required", success: false });
            }

            const grade = await this.service.assignGrade({
                answerId,
                teacherId: user.uid,
                score,
                feedback,
            });

            return res.status(201).json({
                message: "Grade assigned and pending approval",
                data: grade,
                success: true,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }

    async handleApproveGrade(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            if (!user || user.role !== "DIRECTOR") {
                return res.status(403).json({ message: "Only directors can approve grades", success: false });
            }

            const { id } = req.params as { id: string };
            const grade = await this.service.approveGrade(id, user.uid);

            return res.status(200).json({
                message: "Grade approved successfully",
                data: grade,
                success: true,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }

    async handleGetPendingApprovals(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            if (!user || user.role !== "DIRECTOR") {
                return res.status(403).json({ message: "Unauthorized", success: false });
            }

            const pending = await this.service.getPendingApprovals(user.uid);
            return res.status(200).json({
                message: "Success",
                data: pending,
                success: true,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }
}
