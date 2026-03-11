"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerController = void 0;
const answer_service_1 = require("../services/answer-service/answer.service");
class AnswerController {
    constructor() {
        this.service = new answer_service_1.AnswerService();
    }
    async handleCreateAnswer(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorized", success: false });
            const { questionId, text } = req.body;
            if (!questionId)
                return res.status(400).json({ message: "Question ID is required", success: false });
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
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
    async handleSubmitAnswer(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorized", success: false });
            const { id } = req.params;
            const answer = await this.service.submitAnswer(id, user.uid);
            return res.status(200).json({
                message: "Answer submitted successfully",
                data: answer,
                success: true,
            });
        }
        catch (error) {
            return res.status(400).json({
                message: error instanceof Error ? error.message : "Internal server error",
                success: false,
            });
        }
    }
    async handleUpdateAnswerText(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorized", success: false });
            const { id } = req.params;
            const { text } = req.body;
            const answer = await this.service.updateAnswerText(id, text || "");
            return res.status(200).json({
                message: "Answer text updated",
                data: answer,
                success: true,
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }
    async handleGetAnswer(req, res) {
        try {
            const { id } = req.params;
            const answer = await this.service.getAnswer(id);
            if (!answer)
                return res.status(404).json({ message: "Answer not found", success: false });
            return res.status(200).json({
                message: "Success",
                data: answer,
                success: true,
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }
    async handleGetAnswersByQuestion(req, res) {
        try {
            const { questionId } = req.params;
            const answers = await this.service.getAnswersByQuestion(questionId);
            return res.status(200).json({
                message: "Success",
                data: answers,
                success: true,
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }
    async handleAnnotateAnswer(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorized", success: false });
            const { id } = req.params;
            const { text } = req.body;
            if (!text?.trim())
                return res.status(400).json({ message: "Annotation text is required", success: false });
            const annotation = await this.service.annotateAnswer(id, user.uid, text);
            return res.status(201).json({
                message: "Annotation added",
                data: annotation,
                success: true,
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
}
exports.AnswerController = AnswerController;
//# sourceMappingURL=answer.controller.js.map