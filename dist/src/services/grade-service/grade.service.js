"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeService = void 0;
const grade_repository_1 = require("../../repositories/grade.repository");
const answer_repository_1 = require("../../repositories/answer.repository");
const audit_log_service_1 = require("../audit-log-service/audit-log.service");
class GradeService {
    constructor() {
        this.repository = new grade_repository_1.GradeRepository();
        this.answerRepository = new answer_repository_1.AnswerRepository();
        this.auditLogService = new audit_log_service_1.AuditLogService();
    }
    async assignGrade(data) {
        // Find answer to check its status
        const answer = await this.answerRepository.getById(data.answerId);
        if (!answer)
            throw new Error("Answer not found");
        if (answer.status !== "SUBMITTED" && answer.status !== "GRADED") {
            throw new Error("Answer must be submitted before grading");
        }
        // Check if grade already exists
        const existingGrade = await this.repository.getByAnswer(data.answerId);
        if (existingGrade) {
            // Update existing grade
            const updated = await this.repository.update(existingGrade.id, {
                score: data.score,
                feedback: data.feedback,
                status: "PENDING", // Re-submit for approval if updated
            });
            return updated;
        }
        const grade = await this.repository.create(data);
        // Update answer status to GRADED
        await this.answerRepository.update(data.answerId, {
            status: "GRADED",
        });
        // Log activity
        await this.auditLogService.createLog({
            type: "GRADING",
            title: "Grade Assigned",
            description: `Teacher assigned a score of ${data.score}% to a student's answer.`,
            userId: data.teacherId,
            workbookId: answer.question.worksheet.workbookId,
            metadata: {
                answerId: data.answerId,
                score: data.score
            }
        });
        return grade;
    }
    async approveGrade(id, directorId) {
        const grade = await this.repository.approve(id, directorId);
        // Fetch grade to get relations for logging
        const fullGrade = await this.repository.getById(id);
        // Log activity
        await this.auditLogService.createLog({
            type: "GRADING",
            title: "Grade Approved",
            description: `Director approved a grade of ${fullGrade?.score}%.`,
            userId: directorId,
            workbookId: fullGrade.answer.question.worksheet.workbookId,
            metadata: {
                gradeId: id,
                score: fullGrade?.score
            }
        });
        return grade;
    }
    async getPendingApprovals(directorId) {
        return this.repository.getPendingApprovals(directorId);
    }
}
exports.GradeService = GradeService;
//# sourceMappingURL=grade.service.js.map