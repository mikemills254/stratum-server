import { Question, Role } from "../../../prisma/generated/prisma";
import QuestionRepository from "../../repositories/question.repository";
import { ICreateQuestion, IQuestionRepository, IQuestionService, IUpdateQuestion } from "../../types/questions.types";
import { prisma } from "../../utilities/prisma";

class QuestionService implements IQuestionService {
    private repository: IQuestionRepository

    constructor() {
        this.repository = new QuestionRepository()
    }

    private async validateAccess(userId: string, worksheetId: string): Promise<void> {
        // Find the workbook this worksheet belongs to
        const worksheet = await prisma.worksheet.findUnique({
            where: { id: worksheetId },
            include: { workbook: true }
        })

        if (!worksheet) throw new Error("Worksheet not found.")

        const workbook = worksheet.workbook

        // Check if user is the director of the workbook
        if (workbook.directorId === userId) return

        // Check if user is a teacher member of this workbook
        const membership = await prisma.membership.findUnique({
            where: {
                userId_workbookId: { userId, workbookId: workbook.id }
            }
        })

        if (!membership || (membership.role !== Role.TEACHER && membership.role !== Role.DIRECTOR)) {
            throw new Error("Access denied. You do not have permission to manage questions in this workbook.")
        }
    }

    async createQuestion(userId: string, data: ICreateQuestion): Promise<Question> {
        try {
            await this.validateAccess(userId, data.worksheetId)

            // Ensure target user is a teacher if not the director? 
            // Actually metadata indicates Question.teacherId.
            // If a teacher creates it, data.teacherId should be their ID.
            return await this.repository.create(data)
        } catch (error) {
            throw error
        }
    }

    async getQuestion(userId: string, id: string): Promise<Question> {
        try {
            const question = await this.repository.findById(id)
            if (!question) throw new Error("Question not found.")

            // Check access for the worksheet
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

            await this.validateAccess(userId, question.worksheetId)

            return await this.repository.update(id, data)
        } catch (error) {
            throw error
        }
    }

    async deleteQuestion(userId: string, id: string): Promise<void> {
        try {
            const question = await this.repository.findById(id)
            if (!question) throw new Error("Question not found.")

            await this.validateAccess(userId, question.worksheetId)

            await this.repository.delete(id)
        } catch (error) {
            throw error
        }
    }

    async getQuestionsByWorksheet(userId: string, worksheetId: string): Promise<Question[]> {
        try {
            // Check if user has membership in the workbook containing this worksheet
            const worksheet = await prisma.worksheet.findUnique({
                where: { id: worksheetId }
            })
            if (!worksheet) throw new Error("Worksheet not found.")

            const workbook = await prisma.workbook.findUnique({
                where: { id: worksheet.workbookId }
            })
            if (!workbook) throw new Error("Workbook not found.")

            // Allow access if director or member
            const membership = await prisma.membership.findUnique({
                where: {
                    userId_workbookId: { userId, workbookId: workbook.id }
                }
            })

            if (!membership && workbook.directorId !== userId) {
                throw new Error("Access denied.")
            }

            return await this.repository.listByWorksheet(worksheetId)
        } catch (error) {
            throw error
        }
    }
}

export default QuestionService
