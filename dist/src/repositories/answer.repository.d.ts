import { Answer } from "../generated/prisma";
export interface ICreateAnswer {
    questionId: string;
    studentId: string;
    text?: string;
}
export declare class AnswerRepository {
    create(data: ICreateAnswer): Promise<Answer>;
    getById(id: string): Promise<Answer | null>;
    getByQuestionAndStudent(questionId: string, studentId: string): Promise<Answer | null>;
    update(id: string, data: Partial<Answer>): Promise<Answer>;
    delete(id: string): Promise<void>;
    getByQuestion(questionId: string): Promise<Answer[]>;
}
//# sourceMappingURL=answer.repository.d.ts.map