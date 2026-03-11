"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../prisma/generated/prisma");
const question_repository_1 = __importDefault(require("../../repositories/question.repository"));
const prisma_2 = require("../../utilities/prisma");
class QuestionService {
    constructor() {
        this.repository = new question_repository_1.default();
    }
    async validateAccess(userId, worksheetId, requiredRole) {
        // Find the workbook this worksheet belongs to
        const worksheet = await prisma_2.prisma.worksheet.findUnique({
            where: { id: worksheetId },
            include: { workbook: true }
        });
        if (!worksheet)
            throw new Error("Worksheet not found.");
        const workbook = worksheet.workbook;
        // Check membership
        const membership = await prisma_2.prisma.membership.findUnique({
            where: {
                userId_workbookId: { userId, workbookId: workbook.id }
            }
        });
        // If it's a read operation and the user is the Director, allow it even without membership
        if (!requiredRole && workbook.directorId === userId)
            return;
        if (!membership) {
            throw new Error("Access denied. You do not have access to this workbook.");
        }
        if (requiredRole && membership.role !== requiredRole) {
            throw new Error(`Access denied. ${requiredRole} role required.`);
        }
    }
    async createQuestion(userId, data) {
        try {
            await this.validateAccess(userId, data.worksheetId, prisma_1.Role.TEACHER);
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
            // Check access for the worksheet (viewing)
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
            await this.validateAccess(userId, question.worksheetId, prisma_1.Role.TEACHER);
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
            await this.validateAccess(userId, question.worksheetId, prisma_1.Role.TEACHER);
            await this.repository.delete(id);
        }
        catch (error) {
            throw error;
        }
    }
    async getQuestionsByWorksheet(userId, worksheetId) {
        try {
            // Check access for the worksheet (viewing)
            await this.validateAccess(userId, worksheetId);
            return await this.repository.listByWorksheet(worksheetId);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = QuestionService;
//# sourceMappingURL=question.service.js.map