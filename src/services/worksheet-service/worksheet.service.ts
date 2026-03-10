import { Worksheet, Role } from "../../../prisma/generated/prisma";
import WorksheetRepository from "../../repositories/worksheet.repository";
import { ICreateWorksheet, IUpdateWorksheet, IWorksheetRepository, IWorksheetService } from "../../types/worksheets.types";
import { prisma } from "../../utilities/prisma";

class WorksheetService implements IWorksheetService {
    private repository: IWorksheetRepository

    constructor() {
        this.repository = new WorksheetRepository()
    }

    private async validateAccess(userId: string, workbookId: string, requiredRole?: Role): Promise<void> {
        const user = await prisma.user.findUnique({ where: { uid: userId } })
        if (!user) throw new Error("User not found.")

        const workbook = await prisma.workbook.findUnique({ where: { id: workbookId } })
        if (!workbook) throw new Error("Workbook not found.")

        // Check membership
        const membership = await prisma.membership.findUnique({
            where: {
                userId_workbookId: { userId, workbookId }
            }
        })

        // If it's a read operation and the user is the Director, allow it even without membership
        if (!requiredRole && workbook.directorId === userId) return

        if (!membership) throw new Error("You do not have access to this workbook.")

        if (requiredRole && membership.role !== requiredRole) {
            throw new Error(`Access denied. ${requiredRole} role required.`)
        }
    }

    async createWorksheet(userId: string, data: ICreateWorksheet): Promise<Worksheet> {
        try {
            if (!userId) throw new Error("User ID is required.")
            if (!data.title || typeof data.title !== "string") throw new Error("Title is required and must be a string.")
            if (!data.workbookId) throw new Error("Workbook ID is required.")

            await this.validateAccess(userId, data.workbookId, Role.TEACHER)
            return await this.repository.create(data)
        } catch (error) {
            throw error
        }
    }

    async getWorksheet(userId: string, worksheetId: string): Promise<Worksheet> {
        try {
            if (!userId) throw new Error("User ID is required.")
            if (!worksheetId) throw new Error("Worksheet ID is required.")

            const worksheet = await this.repository.get(worksheetId)
            if (!worksheet) throw new Error("Worksheet not found.")

            await this.validateAccess(userId, worksheet.workbookId)
            return worksheet
        } catch (error) {
            throw error
        }
    }

    async editWorksheet(userId: string, worksheetId: string, data: IUpdateWorksheet): Promise<Worksheet> {
        try {
            if (!userId) throw new Error("User ID is required.")
            if (!worksheetId) throw new Error("Worksheet ID is required.")

            const existing = await this.repository.get(worksheetId)
            if (!existing) throw new Error("Worksheet not found.")

            await this.validateAccess(userId, existing.workbookId, Role.TEACHER)

            if (data.title !== undefined && typeof data.title !== "string") {
                throw new Error("Title must be a string.")
            }

            const updated = await this.repository.edit(worksheetId, data)
            if (!updated) throw new Error("Failed to update worksheet.")
            return updated
        } catch (error) {
            throw error
        }
    }

    async deleteWorksheet(userId: string, worksheetId: string): Promise<void> {
        try {
            if (!userId) throw new Error("User ID is required.")
            if (!worksheetId) throw new Error("Worksheet ID is required.")

            const existing = await this.repository.get(worksheetId)
            if (!existing) throw new Error("Worksheet not found.")

            await this.validateAccess(userId, existing.workbookId, Role.TEACHER)
            await this.repository.delete(worksheetId)
        } catch (error) {
            throw error
        }
    }

    async getWorksheetsByWorkbook(userId: string, workbookId: string): Promise<Worksheet[]> {
        try {
            if (!userId) throw new Error("User ID is required.")
            if (!workbookId) throw new Error("Workbook ID is required.")

            await this.validateAccess(userId, workbookId)
            return await this.repository.listByWorkbook(workbookId)
        } catch (error) {
            throw error
        }
    }
}

export default WorksheetService
