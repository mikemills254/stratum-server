import { Answer } from "../generated/prisma";
import { prisma } from "../utilities/prisma";

export interface ICreateAnswer {
    questionId: string;
    studentId: string;
    text?: string;
}

export class AnswerRepository {
    async create(data: ICreateAnswer): Promise<Answer> {
        return prisma.answer.create({
            data: {
                question: { connect: { id: data.questionId } },
                student: { connect: { uid: data.studentId } },
                text: data.text || "",
            },
        });
    }

    async getById(id: string): Promise<Answer | null> {
        return prisma.answer.findUnique({
            where: { id },
            include: {
                grade: true,
                annotations: true,
                student: true,
            },
        });
    }

    async getByQuestionAndStudent(questionId: string, studentId: string): Promise<Answer | null> {
        return prisma.answer.findUnique({
            where: {
                questionId_studentId: { questionId, studentId },
            },
        });
    }

    async update(id: string, data: Partial<Answer>): Promise<Answer> {
        return prisma.answer.update({
            where: { id },
            data,
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.answer.delete({
            where: { id },
        });
    }

    async getByQuestion(questionId: string): Promise<Answer[]> {
        return prisma.answer.findMany({
            where: { questionId },
            include: { student: true, grade: true },
        });
    }
}
