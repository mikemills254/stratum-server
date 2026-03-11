"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationService = void 0;
const annotation_repository_1 = require("../../repositories/annotation.repository");
const audit_log_service_1 = require("../audit-log-service/audit-log.service");
class AnnotationService {
    constructor() {
        this.repository = new annotation_repository_1.AnnotationRepository();
        this.auditLogService = new audit_log_service_1.AuditLogService();
    }
    async createAnnotation(data) {
        const annotation = await this.repository.create(data);
        // Log activity
        await this.auditLogService.createLog({
            type: "ANNOTATION",
            title: "Feedback Provided",
            description: `Teacher left a comment on an answer.`,
            userId: data.teacherId,
            workbookId: annotation.answer.question.worksheet.workbookId,
            metadata: {
                answerId: data.answerId,
                annotationId: annotation.id
            }
        });
        return annotation;
    }
    async getAnnotationsByAnswer(answerId) {
        return this.repository.getByAnswer(answerId);
    }
    async deleteAnnotation(id, teacherId) {
        const annotation = await this.repository.getById(id);
        if (!annotation) {
            throw new Error("Annotation not found");
        }
        if (annotation.teacherId !== teacherId) {
            throw new Error("Only the owner can delete this annotation");
        }
        await this.repository.delete(id);
    }
    async updateAnnotation(id, teacherId, data) {
        const annotation = await this.repository.getById(id);
        if (!annotation) {
            throw new Error("Annotation not found");
        }
        if (annotation.teacherId !== teacherId) {
            throw new Error("Only the owner can update this annotation");
        }
        return this.repository.update(id, data);
    }
    async resolveAnnotation(id) {
        return this.repository.resolve(id);
    }
}
exports.AnnotationService = AnnotationService;
//# sourceMappingURL=annotation.service.js.map