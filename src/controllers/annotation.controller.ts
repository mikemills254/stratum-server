import { Request, Response } from "express";
import { AnnotationService } from "../services/annotation-service/annotation.service";

export class AnnotationController {
    private service: AnnotationService;

    constructor() {
        this.service = new AnnotationService();
    }

    async handleCreateAnnotation(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            if (!user || user.role !== "TEACHER") {
                return res.status(403).json({ message: "Only teachers can annotate", success: false });
            }

            const { answerId, comment, suggestedText } = req.body;
            if (!answerId || !comment) {
                return res.status(400).json({ message: "Answer ID and comment are required", success: false });
            }

            const annotation = await this.service.createAnnotation({
                answerId,
                teacherId: user.uid,
                comment,
                suggestedText,
            });

            return res.status(201).json({
                message: "Annotation created successfully",
                data: annotation,
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

    async handleGetAnnotationsByAnswer(req: Request, res: Response): Promise<Response> {
        try {
            const { answerId } = req.params as { answerId: string };
            const annotations = await this.service.getAnnotationsByAnswer(answerId);

            return res.status(200).json({
                message: "Success",
                data: annotations,
                success: true,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }

    async handleResolveAnnotation(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params as { id: string };
            const annotation = await this.service.resolveAnnotation(id);

            return res.status(200).json({
                message: "Annotation resolved",
                data: annotation,
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
