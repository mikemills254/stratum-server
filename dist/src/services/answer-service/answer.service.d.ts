import { Answer } from "../../../prisma/generated/prisma";
import { ICreateAnswer } from "../../repositories/answer.repository";
export declare class AnswerService {
    private repository;
    private auditLogService;
    constructor();
    createAnswer(data: ICreateAnswer): Promise<Answer>;
    submitAnswer(id: string, studentId: string): Promise<Answer>;
    getAnswer(id: string): Promise<Answer | null>;
    updateAnswerText(id: string, text: string): Promise<Answer>;
    getAnswersByQuestion(questionId: string): Promise<Answer[]>;
    annotateAnswer(answerId: string, teacherId: string, text: string): Promise<{
        teacher: {
            username: string;
            avatarUrl: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        teacherId: string;
        answerId: string;
        comment: string;
        suggestedText: string | null;
        resolvedAt: Date | null;
    }>;
}
//# sourceMappingURL=answer.service.d.ts.map