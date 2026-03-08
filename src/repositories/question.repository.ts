import { Question } from "../generated/prisma/index";
import { ICreateQuestion, IQuestionRepository, IUpdateQuestion } from "../types/questions.types";
import { prisma } from "../utilities/prisma";

class QuestionRepository implements IQuestionRepository {
    async create(data: ICreateQuestion): Promise<Question> {
        try {
            return await prisma.question.create({
                data: {
                    text: data.text,
                    order: data.order ?? 0,
                    isRequired: data.isRequired ?? true,
                    worksheet: { connect: { id: data.worksheetId } },
                    teacher: { connect: { uid: data.teacherId } }
                }
            })
        } catch (error) {
            throw error
        }
    }

    async findById(id: string): Promise<Question | null> {
        try {
            return await prisma.question.findUnique({
                where: { id }
            })
        } catch (error) {
            throw error
        }
    }

    async update(id: string, data: IUpdateQuestion): Promise<Question> {
        try {
            return await prisma.question.update({
                where: { id },
                data
            })
        } catch (error) {
            throw error
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await prisma.question.delete({
                where: { id }
            })
        } catch (error) {
            throw error
        }
    }

    async listByWorksheet(worksheetId: string): Promise<Question[]> {
        try {
            return await prisma.question.findMany({
                where: { worksheetId },
                orderBy: { order: 'asc' }
            })
        } catch (error) {
            throw error
        }
    }
}

export default QuestionRepository
