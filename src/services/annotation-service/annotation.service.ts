import { Annotation } from "../../../prisma/generated/prisma";
import { AnnotationRepository, ICreateAnnotation } from "../../repositories/annotation.repository";
import { AuditLogService } from "../audit-log-service/audit-log.service";

export class AnnotationService {
    private repository: AnnotationRepository;
    private auditLogService: AuditLogService;

    constructor() {
        this.repository = new AnnotationRepository();
        this.auditLogService = new AuditLogService();
    }

    async createAnnotation(data: ICreateAnnotation): Promise<any> {
        const annotation = await this.repository.create(data);

        // Log activity
        await this.auditLogService.createLog({
            type: "ANNOTATION",
            title: "Feedback Provided",
            description: `Teacher left a comment on an answer.`,
            userId: data.teacherId,
            workbookId: (annotation as any).answer.question.worksheet.workbookId,
            metadata: {
                answerId: data.answerId,
                annotationId: annotation.id
            }
        });

        return annotation;
    }

    async getAnnotationsByAnswer(answerId: string): Promise<Annotation[]> {
        return this.repository.getByAnswer(answerId);
    }

    async deleteAnnotation(id: string, teacherId: string): Promise<void> {
        const annotation = await this.repository.getById(id);
        if (!annotation) {
            throw new Error("Annotation not found");
        }
        if (annotation.teacherId !== teacherId) {
            throw new Error("Only the owner can delete this annotation");
        }
        await this.repository.delete(id);
    }

    async updateAnnotation(id: string, teacherId: string, data: { comment?: string; suggestedText?: string }): Promise<Annotation> {
        const annotation = await this.repository.getById(id);
        if (!annotation) {
            throw new Error("Annotation not found");
        }
        if (annotation.teacherId !== teacherId) {
            throw new Error("Only the owner can update this annotation");
        }
        return this.repository.update(id, data);
    }

    async resolveAnnotation(id: string): Promise<Annotation> {
        return this.repository.resolve(id);
    }
}
