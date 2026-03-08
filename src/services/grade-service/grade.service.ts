import { Grade, GradeStatus, AnswerStatus } from "../../generated/prisma";
import { GradeRepository, ICreateGrade } from "../../repositories/grade.repository";
import { AnswerRepository } from "../../repositories/answer.repository";

export class GradeService {
    private repository: GradeRepository;
    private answerRepository: AnswerRepository;

    constructor() {
        this.repository = new GradeRepository();
        this.answerRepository = new AnswerRepository();
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

        return grade;
    }

    async approveGrade(id: string, directorId: string): Promise<Grade> {
        const grade = await this.repository.approve(id, directorId);
        return grade;
    }

    async getPendingApprovals(directorId: string): Promise<Grade[]> {
        return this.repository.getPendingApprovals(directorId);
    }
}
