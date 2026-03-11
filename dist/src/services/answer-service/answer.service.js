"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerService = void 0;
const answer_repository_1 = require("../../repositories/answer.repository");
const audit_log_service_1 = require("../audit-log-service/audit-log.service");
class AnswerService {
    constructor() {
        this.repository = new answer_repository_1.AnswerRepository();
        this.auditLogService = new audit_log_service_1.AuditLogService();
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
        const updated = await this.repository.update(id, {
            status: "SUBMITTED",
            submittedAt: new Date(),
        });
        // Log the activity
        await this.auditLogService.createLog({
            type: "SUBMISSION",
            title: "Answer Submitted",
            description: `A student submitted an answer for evaluation.`,
            userId: studentId,
            workbookId: answer.question.worksheet.workbookId,
            metadata: {
                questionId: answer.questionId,
                answerId: id
            }
        });
        return updated;
    }
    async getAnswer(id) {
        return this.repository.getById(id);
    }
    async updateAnswerText(id, text) {
        return this.repository.update(id, { text });
    }
    async getAnswersByQuestion(questionId) {
        return this.repository.getByQuestion(questionId);
    }
    async annotateAnswer(answerId, teacherId, text) {
        // verify answer exists
        const answer = await this.repository.getById(answerId);
        if (!answer)
            throw new Error("Answer not found");
        // We use Prisma directly here for simplicity since the relationship is nested
        // Alternatively, we could create an AnnotationRepository
        const { prisma } = await import("../../utilities/prisma.js");
        return prisma.annotation.create({
            data: {
                comment: text,
                teacher: { connect: { uid: teacherId } },
                answer: { connect: { id: answerId } },
            },
            include: {
                teacher: {
                    select: {
                        username: true,
                        avatarUrl: true
                    }
                }
            }
        });
    }
}
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map