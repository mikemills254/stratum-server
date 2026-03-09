"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../generated/prisma/index");
const question_repository_1 = __importDefault(require("../../repositories/question.repository"));
const prisma_1 = require("../../utilities/prisma");
class QuestionService {
    constructor() {
        this.repository = new question_repository_1.default();
    }
    async validateAccess(userId, worksheetId) {
        // Find the workbook this worksheet belongs to
        const worksheet = await prisma_1.prisma.worksheet.findUnique({
            where: { id: worksheetId },
            include: { workbook: true }
        });
        if (!worksheet)
            throw new Error("Worksheet not found.");
        const workbook = worksheet.workbook;
        // Check if user is the director of the workbook
        if (workbook.directorId === userId)
            return;
        // Check if user is a teacher member of this workbook
        const membership = await prisma_1.prisma.membership.findUnique({
            where: {
                userId_workbookId: { userId, workbookId: workbook.id }
            }
        });
        if (!membership || (membership.role !== index_1.Role.TEACHER && membership.role !== index_1.Role.DIRECTOR)) {
            throw new Error("Access denied. You do not have permission to manage questions in this workbook.");
        }
    }
    async createQuestion(userId, data) {
        try {
            await this.validateAccess(userId, data.worksheetId);
            // Ensure target user is a teacher if not the director? 
            // Actually metadata indicates Question.teacherId.
            // If a teacher creates it, data.teacherId should be their ID.
            return await this.repository.create(data);
        }
        catch (error) {
            throw error;
        }
    }
    async getQuestion(userId, id) {
        try {
            const question = await this.repository.findById(id);
            if (!question)
                throw new Error("Question not found.");
            // Check access for the worksheet
            await this.validateAccess(userId, question.worksheetId);
            return question;
        }
        catch (error) {
            throw error;
        }
    }
    async editQuestion(userId, id, data) {
        try {
            const question = await this.repository.findById(id);
            if (!question)
                throw new Error("Question not found.");
            await this.validateAccess(userId, question.worksheetId);
            return await this.repository.update(id, data);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteQuestion(userId, id) {
        try {
            const question = await this.repository.findById(id);
            if (!question)
                throw new Error("Question not found.");
            await this.validateAccess(userId, question.worksheetId);
            await this.repository.delete(id);
        }
        catch (error) {
            throw error;
        }
    }
    async getQuestionsByWorksheet(userId, worksheetId) {
        try {
            // Check if user has membership in the workbook containing this worksheet
            const worksheet = await prisma_1.prisma.worksheet.findUnique({
                where: { id: worksheetId }
            });
            if (!worksheet)
                throw new Error("Worksheet not found.");
            const workbook = await prisma_1.prisma.workbook.findUnique({
                where: { id: worksheet.workbookId }
            });
            if (!workbook)
                throw new Error("Workbook not found.");
            // Allow access if director or member
            const membership = await prisma_1.prisma.membership.findUnique({
                where: {
                    userId_workbookId: { userId, workbookId: workbook.id }
                }
            });
            if (!membership && workbook.directorId !== userId) {
                throw new Error("Access denied.");
            }
            return await this.repository.listByWorksheet(worksheetId);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = QuestionService;
//# sourceMappingURL=question.service.js.map