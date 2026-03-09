import { Worksheet, Role } from "../../../prisma/generated/prisma";
import WorksheetRepository from "../../repositories/worksheet.repository";
import { ICreateWorksheet, IUpdateWorksheet, IWorksheetRepository, IWorksheetService } from "../../types/worksheets.types";
import { prisma } from "../../utilities/prisma";

class WorksheetService implements IWorksheetService {
    private repository: IWorksheetRepository

    constructor() {
        this.repository = new WorksheetRepository()
    }

    private async validateDirector(userId: string, workbookId: string): Promise<void> {
        const user = await prisma.user.findUnique({ where: { uid: userId } })
        if (!user || user.role !== Role.DIRECTOR) {
            throw new Error("Only Directors can modify worksheets.")
        }

        const workbook = await prisma.workbook.findUnique({ where: { id: workbookId } })
        if (!workbook) throw new Error("Workbook not found.")
        if (workbook.directorId !== userId) {
            throw new Error("You do not own this workbook.")
        }
    }

    private async validateMembership(userId: string, workbookId: string): Promise<void> {
        const membership = await prisma.membership.findUnique({
            where: {
                userId_workbookId: { userId, workbookId }
            }
        })
        if (!membership) throw new Error("You do not have access to this workbook.")
    }

    async createWorksheet(userId: string, data: ICreateWorksheet): Promise<Worksheet> {
        try {
            await this.validateDirector(userId, data.workbookId)
            return await this.repository.create(data)
        } catch (error) {
            throw error
        }
    }

    async getWorksheet(userId: string, worksheetId: string): Promise<Worksheet> {
        try {
            const worksheet = await this.repository.get(worksheetId)
            if (!worksheet) throw new Error("Worksheet not found.")

            await this.validateMembership(userId, worksheet.workbookId)
            return worksheet
        } catch (error) {
            throw error
        }
    }

    async editWorksheet(userId: string, worksheetId: string, data: IUpdateWorksheet): Promise<Worksheet> {
        try {
            const existing = await this.repository.get(worksheetId)
            if (!existing) throw new Error("Worksheet not found.")

            await this.validateDirector(userId, existing.workbookId)
            const updated = await this.repository.edit(worksheetId, data)
            if (!updated) throw new Error("Failed to update worksheet.")
            return updated
        } catch (error) {
            throw error
        }
    }

    async deleteWorksheet(userId: string, worksheetId: string): Promise<void> {
        try {
            const existing = await this.repository.get(worksheetId)
            if (!existing) throw new Error("Worksheet not found.")

            await this.validateDirector(userId, existing.workbookId)
            await this.repository.delete(worksheetId)
        } catch (error) {
            throw error
        }
    }

    async getWorksheetsByWorkbook(userId: string, workbookId: string): Promise<Worksheet[]> {
        try {
            await this.validateMembership(userId, workbookId)
            return await this.repository.listByWorkbook(workbookId)
        } catch (error) {
            throw error
        }
    }
}

export default WorksheetService
