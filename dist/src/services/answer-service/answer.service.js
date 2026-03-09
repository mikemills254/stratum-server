"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerService = void 0;
const answer_repository_1 = require("../../repositories/answer.repository");
class AnswerService {
    constructor() {
        this.repository = new answer_repository_1.AnswerRepository();
    }
    async createAnswer(data) {
        // Check if answer already exists
        const existing = await this.repository.getByQuestionAndStudent(data.questionId, data.studentId);
        if (existing) {
            return existing;
        }
        return this.repository.create(data);
    }
    async submitAnswer(id, studentId) {
        const answer = await this.repository.getById(id);
        if (!answer)
            throw new Error("Answer not found");
        if (answer.studentId !== studentId)
            throw new Error("Unauthorized");
        if (answer.status !== "DRAFT")
            throw new Error("Answer already submitted or graded");
        return this.repository.update(id, {
            status: "SUBMITTED",
            submittedAt: new Date(),
        });
    }
    async getAnswer(id) {
        return this.repository.getById(id);
    }
    async getAnswersByQuestion(questionId) {
        return this.repository.getByQuestion(questionId);
    }
}
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map