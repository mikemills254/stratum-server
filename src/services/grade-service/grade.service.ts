import { Grade, GradeStatus, AnswerStatus } from "../../../prisma/generated/prisma";
import { GradeRepository, ICreateGrade } from "../../repositories/grade.repository";
import { AnswerRepository } from "../../repositories/answer.repository";
import { AuditLogService } from "../audit-log-service/audit-log.service";

export class GradeService {
    private repository: GradeRepository;
    private answerRepository: AnswerRepository;
    private auditLogService: AuditLogService;

    constructor() {
        this.repository = new GradeRepository();
        this.answerRepository = new AnswerRepository();
        this.auditLogService = new AuditLogService();
    }

    async assignGrade(data: ICreateGrade): Promise<Grade> {
        // Find answer to check its status
        const answer = await this.answerRepository.getById(data.answerId);
        if (!answer) throw new Error("Answer not found");
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
                status: "PENDING" as GradeStatus, // Re-submit for approval if updated
            });
            return updated;
        }

        const grade = await this.repository.create(data);

        // Update answer status to GRADED
        await this.answerRepository.update(data.answerId, {
            status: "GRADED" as AnswerStatus,
        });

        // Log activity
        await this.auditLogService.createLog({
            type: "GRADING",
            title: "Grade Assigned",
            description: `Teacher assigned a score of ${data.score}% to a student's answer.`,
            userId: data.teacherId,
            workbookId: (answer as any).question.worksheet.workbookId,
            metadata: {
                answerId: data.answerId,
                score: data.score
            }
        });

        return grade;
    }

    async approveGrade(id: string, directorId: string): Promise<Grade> {
        const grade = await this.repository.approve(id, directorId);

        // Fetch grade to get relations for logging
        const fullGrade = await this.repository.getById(id);

        // Log activity
        await this.auditLogService.createLog({
            type: "GRADING",
            title: "Grade Approved",
            description: `Director approved a grade of ${fullGrade?.score}%.`,
            userId: directorId,
            workbookId: (fullGrade as any).answer.question.worksheet.workbookId,
            metadata: {
                gradeId: id,
                score: fullGrade?.score
            }
        });

        return grade;
    }

    async getPendingApprovals(directorId: string): Promise<Grade[]> {
        return this.repository.getPendingApprovals(directorId);
    }
}
