import { Workbook } from "../../prisma/generated/prisma";
import { ICreateWorkBook, ISearchWorkBook, IWorkbookRepository } from "../types/workbooks.types";
import { prisma } from "../utilities/prisma";

class WorkbookRepository implements IWorkbookRepository {

    async create(data: ICreateWorkBook): Promise<Workbook> {
        try {
            const workbook = await prisma.workbook.create({
                data: {
                    name: data.name,
                    description: data.description,
                    tag: data.tag,
                    director: {
                        connect: { uid: data.directorId }
                    }
                }
            })
            return workbook
        } catch (error) {
            throw error
        }
    }

    async get(id: string): Promise<Workbook | null> {
        try {
            const workbook = await prisma.workbook.findUnique({
                where: { id }
            })
            return workbook
        } catch (error) {
            throw error
        }
    }

    async edit(id: string, data: Partial<ICreateWorkBook>): Promise<Workbook | null> {
        try {
            const workbook = await prisma.workbook.update({
                where: { id },
                data: {
                    ...(data.name && { name: data.name }),
                    ...(data.description && { description: data.description }),
                    ...(data.tag && { tag: data.tag }),
                }
            })
            return workbook
        } catch (error) {
            throw error
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await prisma.workbook.delete({
                where: { id }
            })
        } catch (error) {
            throw error
        }
    }

    async search(params: ISearchWorkBook): Promise<Workbook[]> {
        try {
            const workbooks = await prisma.workbook.findMany({
                where: {
                    isArchived: false,
                    AND: [
                        ...(params.query ? [{
                            OR: [
                                { name: { contains: params.query, mode: "insensitive" as const } },
                                { description: { contains: params.query, mode: "insensitive" as const } },
                                { tag: { contains: params.query, mode: "insensitive" as const } },
                            ]
                        }] : []),
                        ...(params.directorId ? [{ directorId: params.directorId }] : []),
                        ...(params.tag ? [{ tag: { contains: params.tag, mode: "insensitive" as const } }] : []),
                        ...(params.workbookIds ? [{ id: { in: params.workbookIds } }] : []),
                    ]
                },
                orderBy: { createdAt: "desc" },
                take: params.limit ?? 20,
                skip: params.offset ?? 0,
            })
            return workbooks
        } catch (error) {
            throw error
        }
    }

}

export default WorkbookRepository