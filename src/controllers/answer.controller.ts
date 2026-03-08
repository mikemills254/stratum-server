import { Request, Response } from "express";
import { AnswerService } from "../services/answer-service/answer.service";

export class AnswerController {
    private service: AnswerService;

    constructor() {
        this.service = new AnswerService();
    }

    async handleCreateAnswer(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: "Unauthorized", success: false });

            const { questionId, text } = req.body;
            if (!questionId) return res.status(400).json({ message: "Question ID is required", success: false });

            const answer = await this.service.createAnswer({
                questionId,
                studentId: user.uid,
                text,
            });

            return res.status(201).json({
                message: "Answer instance created/retrieved",
                data: answer,
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

    async handleSubmitAnswer(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: "Unauthorized", success: false });

            const { id } = req.params as { id: string };
            const answer = await this.service.submitAnswer(id, user.uid);

            return res.status(200).json({
                message: "Answer submitted successfully",
                data: answer,
                success: true,
            });
        } catch (error) {
            return res.status(400).json({
                message: error instanceof Error ? error.message : "Internal server error",
                success: false,
            });
        }
    }

    async handleGetAnswer(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params as { id: string };
            const answer = await this.service.getAnswer(id);
            if (!answer) return res.status(404).json({ message: "Answer not found", success: false });

            return res.status(200).json({
                message: "Success",
                data: answer,
                success: true,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }

    async handleGetAnswersByQuestion(req: Request, res: Response): Promise<Response> {
        try {
            const { questionId } = req.params as { questionId: string };
            const answers = await this.service.getAnswersByQuestion(questionId);

            return res.status(200).json({
                message: "Success",
                data: answers,
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
