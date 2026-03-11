"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeRepository = void 0;
const prisma_1 = require("../utilities/prisma");
class GradeRepository {
    async create(data) {
        return prisma_1.prisma.grade.create({
            data: {
                answer: { connect: { id: data.answerId } },
                teacher: { connect: { uid: data.teacherId } },
                score: data.score,
                feedback: data.feedback,
            },
        });
    }
    async getById(id) {
        return prisma_1.prisma.grade.findUnique({
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
            }
        });
    }
    async getByAnswer(answerId) {
        return prisma_1.prisma.grade.findUnique({
            where: { answerId },
            include: { teacher: true, approvedBy: true },
        });
    }
    async update(id, data) {
        return prisma_1.prisma.grade.update({
            where: { id },
            data,
        });
    }
    async approve(id, directorId) {
        return prisma_1.prisma.grade.update({
            where: { id },
            data: {
                status: "APPROVED",
                approvedBy: { connect: { uid: directorId } },
                approvedAt: new Date(),
            },
        });
    }
    async getPendingApprovals(directorId) {
        // Find all workbooks where this director is the owner
        return prisma_1.prisma.grade.findMany({
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
exports.GradeRepository = GradeRepository;
//# sourceMappingURL=grade.repository.js.map