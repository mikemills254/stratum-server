import { Worksheet } from "../../prisma/generated/prisma";
import { ICreateWorksheet, IUpdateWorksheet, IWorksheetRepository } from "../types/worksheets.types";
import { prisma } from "../utilities/prisma";

class WorksheetRepository implements IWorksheetRepository {

    async create(data: ICreateWorksheet): Promise<Worksheet> {
        try {
            const worksheet = await prisma.worksheet.create({
                data: {
                    title: data.title,
                    order: data.order ?? 0,
                    workbook: {
                        connect: { id: data.workbookId }
                    }
                }
            })
            return worksheet
        } catch (error) {
            throw error
        }
    }

    async get(id: string): Promise<Worksheet | null> {
        try {
            const worksheet = await prisma.worksheet.findUnique({
                where: { id }
            })
            return worksheet
        } catch (error) {
            throw error
        }
    }

    async edit(id: string, data: IUpdateWorksheet): Promise<Worksheet | null> {
        try {
            const worksheet = await prisma.worksheet.update({
                where: { id },
                data: {
                    ...(data.title && { title: data.title }),
                    ...(data.order !== undefined && { order: data.order }),
                    ...(data.isLocked !== undefined && { isLocked: data.isLocked }),
                    ...(data.yjsState && { yjsState: data.yjsState }),
                }
            })
            return worksheet
        } catch (error) {
            throw error
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await prisma.worksheet.delete({
                where: { id }
            })
        } catch (error) {
            throw error
        }
    }

    async listByWorkbook(workbookId: string): Promise<Worksheet[]> {
        try {
            const worksheets = await prisma.worksheet.findMany({
                where: { workbookId },
                orderBy: { order: "asc" }
            })
            return worksheets
        } catch (error) {
            throw error
        }
    }
}

export default WorksheetRepository
