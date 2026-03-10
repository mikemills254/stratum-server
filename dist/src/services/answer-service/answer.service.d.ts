import { Answer } from "../../../prisma/generated/prisma";
import { ICreateAnswer } from "../../repositories/answer.repository";
export declare class AnswerService {
    private repository;
    constructor();
    createAnswer(data: ICreateAnswer): Promise<Answer>;
    submitAnswer(id: string, studentId: string): Promise<Answer>;
    getAnswer(id: string): Promise<Answer | null>;
    getAnswersByQuestion(questionId: string): Promise<Answer[]>;
}
//# sourceMappingURL=answer.service.d.ts.map