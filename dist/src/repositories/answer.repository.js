"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerRepository = void 0;
const prisma_1 = require("../utilities/prisma");
class AnswerRepository {
    async create(data) {
        return prisma_1.prisma.answer.create({
            data: {
                question: { connect: { id: data.questionId } },
                student: { connect: { uid: data.studentId } },
                text: data.text || "",
            },
            include: {
                annotations: {
                    include: {
                        teacher: {
                            select: {
                                username: true,
                                avatarUrl: true
                            }
                        }
                    }
                },
                grade: true
            }
        });
    }
    async getById(id) {
        return prisma_1.prisma.answer.findUnique({
            where: { id },
            include: {
                grade: true,
                annotations: {
                    include: {
                        teacher: {
                            select: {
                                username: true,
                                avatarUrl: true
                            }
                        }
                    }
                },
                student: true,
                question: {
                    include: {
                        worksheet: {
                            select: {
                                workbookId: true
                            }
                        }
                    }
                }
            },
        });
    }
    async getByQuestionAndStudent(questionId, studentId) {
        return prisma_1.prisma.answer.findUnique({
            where: {
                questionId_studentId: { questionId, studentId },
            },
            include: {
                annotations: {
                    include: {
                        teacher: {
                            select: {
                                username: true,
                                avatarUrl: true
                            }
                        }
                    }
                },
                grade: true
            }
        });
    }
    async update(id, data) {
        return prisma_1.prisma.answer.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        await prisma_1.prisma.answer.delete({
            where: { id },
        });
    }
    async getByQuestion(questionId) {
        return prisma_1.prisma.answer.findMany({
            where: { questionId },
            include: {
                student: true,
                grade: true,
                annotations: {
                    include: {
                        teacher: {
                            select: {
                                username: true,
                                avatarUrl: true
                            }
                        }
                    }
                }
            },
        });
    }
}
exports.AnswerRepository = AnswerRepository;
//# sourceMappingURL=answer.repository.js.map