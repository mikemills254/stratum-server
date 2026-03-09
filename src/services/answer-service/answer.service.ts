import { Answer, AnswerStatus } from "../../../prisma/generated/prisma";
import { AnswerRepository, ICreateAnswer } from "../../repositories/answer.repository";

export class AnswerService {
    private repository: AnswerRepository;

    constructor() {
        this.repository = new AnswerRepository();
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

        return this.repository.update(id, {
            status: "SUBMITTED" as AnswerStatus,
            submittedAt: new Date(),
        });
    }

    async getAnswer(id: string): Promise<Answer | null> {
        return this.repository.getById(id);
    }

    async getAnswersByQuestion(questionId: string): Promise<Answer[]> {
        return this.repository.getByQuestion(questionId);
    }
}
