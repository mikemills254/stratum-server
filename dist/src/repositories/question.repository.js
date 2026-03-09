"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../utilities/prisma");
class QuestionRepository {
    async create(data) {
        try {
            return await prisma_1.prisma.question.create({
                data: {
                    text: data.text,
                    order: data.order ?? 0,
                    isRequired: data.isRequired ?? true,
                    worksheet: { connect: { id: data.worksheetId } },
                    teacher: { connect: { uid: data.teacherId } }
                }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            return await prisma_1.prisma.question.findUnique({
                where: { id }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, data) {
        try {
            return await prisma_1.prisma.question.update({
                where: { id },
                data
            });
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_1.prisma.question.delete({
                where: { id }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async listByWorksheet(worksheetId) {
        try {
            return await prisma_1.prisma.question.findMany({
                where: { worksheetId },
                orderBy: { order: 'asc' }
            });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = QuestionRepository;
//# sourceMappingURL=question.repository.js.map