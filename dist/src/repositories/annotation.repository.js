"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationRepository = void 0;
const prisma_1 = require("../utilities/prisma");
class AnnotationRepository {
    async create(data) {
        return prisma_1.prisma.annotation.create({
            data: {
                answer: { connect: { id: data.answerId } },
                teacher: { connect: { uid: data.teacherId } },
                comment: data.comment,
                suggestedText: data.suggestedText,
            },
        });
    }
    async getByAnswer(answerId) {
        return prisma_1.prisma.annotation.findMany({
            where: { answerId },
            include: { teacher: true },
        });
    }
    async update(id, data) {
        return prisma_1.prisma.annotation.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        await prisma_1.prisma.annotation.delete({
            where: { id },
        });
    }
    async resolve(id) {
        return prisma_1.prisma.annotation.update({
            where: { id },
            data: { resolvedAt: new Date() },
        });
    }
}
exports.AnnotationRepository = AnnotationRepository;
//# sourceMappingURL=annotation.repository.js.map