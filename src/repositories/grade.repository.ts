import { Grade } from "../../prisma/generated/prisma";
import { prisma } from "../utilities/prisma";

export interface ICreateGrade {
    answerId: string;
    teacherId: string;
    score: number;
    feedback?: string;
}

export class GradeRepository {
    async create(data: ICreateGrade): Promise<Grade> {
        return prisma.grade.create({
            data: {
                answer: { connect: { id: data.answerId } },
                teacher: { connect: { uid: data.teacherId } },
                score: data.score,
                feedback: data.feedback,
            },
        });
    }

    async getByAnswer(answerId: string): Promise<Grade | null> {
        return prisma.grade.findUnique({
            where: { answerId },
            include: { teacher: true, approvedBy: true },
        });
    }

    async update(id: string, data: Partial<Grade>): Promise<Grade> {
        return prisma.grade.update({
            where: { id },
            data,
        });
    }

    async approve(id: string, directorId: string): Promise<Grade> {
        return prisma.grade.update({
            where: { id },
            data: {
                status: "APPROVED",
                approvedBy: { connect: { uid: directorId } },
                approvedAt: new Date(),
            },
        });
    }

    async getPendingApprovals(directorId: string): Promise<Grade[]> {
        // Find all workbooks where this director is the owner
        return prisma.grade.findMany({
            where: {
                status: "PENDING",
                answer: {
                    question: {
                        worksheet: {
                            workbook: { directorId: directorId }
                        }
                    }
                }
            },
            include: {
                answer: {
                    include: {
                        student: true,
                        question: true,
                    }
                },
                teacher: true,
            }
        });
    }
}
