import { Answer, AnswerStatus } from "../../../prisma/generated/prisma";
import { AnswerRepository, ICreateAnswer } from "../../repositories/answer.repository";
import { AuditLogService } from "../audit-log-service/audit-log.service";

export class AnswerService {
    private repository: AnswerRepository;
    private auditLogService: AuditLogService;

    constructor() {
        this.repository = new AnswerRepository();
        this.auditLogService = new AuditLogService();
    }

    async createAnswer(data: ICreateAnswer): Promise<Answer> {
        // Check if answer already exists
        const existing = await this.repository.getByQuestionAndStudent(data.questionId, data.studentId);
        if (existing) {
            return existing;
        }
        return this.repository.create(data);
    }

    async submitAnswer(id: string, studentId: string): Promise<Answer> {
        const answer = await this.repository.getById(id);
        if (!answer) throw new Error("Answer not found");
        if (answer.studentId !== studentId) throw new Error("Unauthorized");
        if (answer.status !== "DRAFT") throw new Error("Answer already submitted or graded");

        const updated = await this.repository.update(id, {
            status: "SUBMITTED" as AnswerStatus,
            submittedAt: new Date(),
        });

        // Log the activity
        await this.auditLogService.createLog({
            type: "SUBMISSION",
            title: "Answer Submitted",
            description: `A student submitted an answer for evaluation.`,
            userId: studentId,
            workbookId: (answer as any).question.worksheet.workbookId,
            metadata: {
                questionId: (answer as any).questionId,
                answerId: id
            }
        });

        return updated;
    }

    async getAnswer(id: string): Promise<Answer | null> {
        return this.repository.getById(id);
    }

    async updateAnswerText(id: string, text: string): Promise<Answer> {
        return this.repository.update(id, { text });
    }

    async getAnswersByQuestion(questionId: string): Promise<Answer[]> {
        return this.repository.getByQuestion(questionId);
    }

    async annotateAnswer(answerId: string, teacherId: string, text: string) {
        // verify answer exists
        const answer = await this.repository.getById(answerId);
        if (!answer) throw new Error("Answer not found");

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
