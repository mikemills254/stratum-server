import { Annotation } from "../../prisma/generated/prisma";
import { prisma } from "../utilities/prisma";

export interface ICreateAnnotation {
    answerId: string;
    teacherId: string;
    comment: string;
    suggestedText?: string;
}

export class AnnotationRepository {
    async create(data: ICreateAnnotation): Promise<Annotation> {
        return prisma.annotation.create({
            data: {
                answer: { connect: { id: data.answerId } },
                teacher: { connect: { uid: data.teacherId } },
                comment: data.comment,
                suggestedText: data.suggestedText,
            },
            include: {
                teacher: true,
                answer: {
                    include: {
                        question: {
                            include: {
                                worksheet: {
                                    select: {
                                        workbookId: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    async getByAnswer(answerId: string): Promise<Annotation[]> {
        return prisma.annotation.findMany({
            where: { answerId },
            include: { teacher: true },
        });
    }

    async getById(id: string): Promise<Annotation | null> {
        return prisma.annotation.findUnique({
            where: { id },
            include: {
                teacher: true,
                answer: {
                    include: {
                        question: {
                            include: {
                                worksheet: {
                                    select: {
                                        workbookId: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
        });
    }

    async update(id: string, data: Partial<Annotation>): Promise<Annotation> {
        return prisma.annotation.update({
            where: { id },
            data,
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.annotation.delete({
            where: { id },
        });
    }

    async resolve(id: string): Promise<Annotation> {
        return prisma.annotation.update({
            where: { id },
            data: { resolvedAt: new Date() },
        });
    }
}
