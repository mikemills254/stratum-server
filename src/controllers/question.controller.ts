import { Request, Response } from "express";
import QuestionService from "../services/question-service/question.service";
import { IQuestionController, IQuestionService } from "../types/questions.types";

class QuestionController implements IQuestionController {
    private service: IQuestionService

    constructor() {
        this.service = new QuestionService()
    }

    async handleCreateQuestion(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const { text, worksheetId } = req.body
            if (!text || !worksheetId) {
                return res.status(400).json({
                    message: "Text and Worksheet ID are required.",
                    success: false
                })
            }

            const question = await this.service.createQuestion(user.uid, {
                ...req.body,
                teacherId: user.uid
            })

            return res.status(201).json({
                message: "Question created successfully.",
                data: question,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleGetQuestion(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "ID is required.", success: false })

            const question = await this.service.getQuestion(user.uid, id)
            return res.status(200).json({
                message: "Success",
                data: question,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleEditQuestion(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "ID is required.", success: false })

            const question = await this.service.editQuestion(user.uid, id, req.body)
            return res.status(200).json({
                message: "Question updated successfully.",
                data: question,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleDeleteQuestion(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "ID is required.", success: false })

            await this.service.deleteQuestion(user.uid, id)
            return res.status(200).json({
                message: "Question deleted successfully.",
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleGetQuestionsByWorksheet(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const worksheetId = req.params.worksheetId as string
            if (!worksheetId) return res.status(400).json({ message: "Worksheet ID is required.", success: false })

            const questions = await this.service.getQuestionsByWorksheet(user.uid, worksheetId)
            return res.status(200).json({
                message: "Success",
                data: questions,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }
}

export default QuestionController
