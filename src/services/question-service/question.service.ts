import { Question, Role } from "../../../prisma/generated/prisma";
import QuestionRepository from "../../repositories/question.repository";
import { ICreateQuestion, IQuestionRepository, IQuestionService, IUpdateQuestion } from "../../types/questions.types";
import { prisma } from "../../utilities/prisma";

class QuestionService implements IQuestionService {
    private repository: IQuestionRepository

    constructor() {
        this.repository = new QuestionRepository()
    }

    private async validateAccess(userId: string, worksheetId: string, requiredRole?: Role): Promise<void> {
        // Find the workbook this worksheet belongs to
        const worksheet = await prisma.worksheet.findUnique({
            where: { id: worksheetId },
            include: { workbook: true }
        })

        if (!worksheet) throw new Error("Worksheet not found.")

        const workbook = worksheet.workbook

        // Check membership
        const membership = await prisma.membership.findUnique({
            where: {
                userId_workbookId: { userId, workbookId: workbook.id }
            }
        })

        // If it's a read operation and the user is the Director, allow it even without membership
        if (!requiredRole && workbook.directorId === userId) return

        if (!membership) {
            throw new Error("Access denied. You do not have access to this workbook.")
        }

        if (requiredRole && membership.role !== requiredRole) {
            throw new Error(`Access denied. ${requiredRole} role required.`)
        }
    }

    async createQuestion(userId: string, data: ICreateQuestion): Promise<Question> {
        try {
            await this.validateAccess(userId, data.worksheetId, Role.TEACHER)
            return await this.repository.create(data)
        } catch (error) {
            throw error
        }
    }

    async getQuestion(userId: string, id: string): Promise<Question> {
        try {
            const question = await this.repository.findById(id)
            if (!question) throw new Error("Question not found.")

            // Check access for the worksheet (viewing)
            await this.validateAccess(userId, question.worksheetId)

            return question
        } catch (error) {
            throw error
        }
    }

    async editQuestion(userId: string, id: string, data: IUpdateQuestion): Promise<Question> {
        try {
            const question = await this.repository.findById(id)
            if (!question) throw new Error("Question not found.")

            await this.validateAccess(userId, question.worksheetId, Role.TEACHER)

            return await this.repository.update(id, data)
        } catch (error) {
            throw error
        }
    }

    async deleteQuestion(userId: string, id: string): Promise<void> {
        try {
            const question = await this.repository.findById(id)
            if (!question) throw new Error("Question not found.")

            await this.validateAccess(userId, question.worksheetId, Role.TEACHER)

            await this.repository.delete(id)
        } catch (error) {
            throw error
        }
    }

    async getQuestionsByWorksheet(userId: string, worksheetId: string): Promise<Question[]> {
        try {
            // Check access for the worksheet (viewing)
            await this.validateAccess(userId, worksheetId)
            return await this.repository.listByWorksheet(worksheetId)
        } catch (error) {
            throw error
        }
    }
}

export default QuestionService
