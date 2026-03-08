import { Role, Workbook } from "../../generated/prisma";
import WorkbookRepository from "../../repositories/workbook.repository";
import { ICreateWorkBook, ISearchWorkBook, IWorkbookRepository, IWorkbookService } from "../../types/workbooks.types";
import { prisma } from "../../utilities/prisma";

class WorkbookService implements IWorkbookService {
    private repository: IWorkbookRepository

    constructor() {
        this.repository = new WorkbookRepository
    }

    // ── Only Directors can create/edit/delete workbooks
    private async validateDirector(userId: string): Promise<boolean> {
        try {
            const user = await prisma.user.findUnique({
                where: { uid: userId }
            })

            if (!user) throw new Error("User not found.")

            return user.role === Role.DIRECTOR
        } catch (error) {
            throw error
        }
    }

    // ── Any member of the workbook can read it
    private async validateMembership(userId: string, workbookId: string): Promise<boolean> {
        try {
            const membership = await prisma.membership.findUnique({
                where: {
                    userId_workbookId: { userId, workbookId }
                }
            })
            return !!membership
        } catch (error) {
            throw error
        }
    }

    async createWorkbook(userId: string, data: Partial<ICreateWorkBook>): Promise<Workbook> {
        try {
            if (!userId) throw new Error("User ID is required.")

            const { name, description, tag } = data

            if (!name || typeof name !== "string") {
                throw new Error("Workbook name is required and must be a string.")
            }

            if (!await this.validateDirector(userId)) {
                throw new Error("Only Directors can create workbooks.")
            }

            const workbook = await this.repository.create({
                name,
                description,
                tag,
                directorId: userId
            })

            return workbook
        } catch (error) {
            throw error
        }
    }

    async getWorkbook(userId: string, workbookId: string): Promise<Workbook> {
        try {
            if (!userId) throw new Error("User ID is required.")
            if (!workbookId) throw new Error("Workbook ID is required.")

            const isMember = await this.validateMembership(userId, workbookId)
            if (!isMember) throw new Error("You do not have access to this workbook.")

            const workbook = await this.repository.get(workbookId)
            if (!workbook) throw new Error("Workbook not found.")

            return workbook
        } catch (error) {
            throw error
        }
    }

    async editWorkbook(userId: string, workbookId: string, data: Partial<ICreateWorkBook>): Promise<Workbook> {
        try {
            if (!userId) throw new Error("User ID is required.")
            if (!workbookId) throw new Error("Workbook ID is required.")

            if (!await this.validateDirector(userId)) {
                throw new Error("Only Directors can edit workbooks.")
            }

            // Make sure the director owns this specific workbook
            const existing = await this.repository.get(workbookId)
            if (!existing) throw new Error("Workbook not found.")
            if (existing.directorId !== userId) {
                throw new Error("You do not own this workbook.")
            }

            const { name, description, tag } = data

            if (name && typeof name !== "string") {
                throw new Error("Workbook name must be a string.")
            }

            const updated = await this.repository.edit(workbookId, {
                ...(name && { name }),
                ...(description !== undefined && { description }),
                ...(tag !== undefined && { tag }),
            })

            if (!updated) throw new Error("Failed to update workbook.")

            return updated
        } catch (error) {
            throw error
        }
    }

    async deleteWorkbook(userId: string, workbookId: string): Promise<void> {
        try {
            if (!userId) throw new Error("User ID is required.")
            if (!workbookId) throw new Error("Workbook ID is required.")

            if (!await this.validateDirector(userId)) {
                throw new Error("Only Directors can delete workbooks.")
            }

            const existing = await this.repository.get(workbookId)
            if (!existing) throw new Error("Workbook not found.")
            if (existing.directorId !== userId) {
                throw new Error("You do not own this workbook.")
            }

            await this.repository.delete(workbookId)
        } catch (error) {
            throw error
        }
    }

    async searchWorkbooks(userId: string, params: ISearchWorkBook): Promise<Workbook[]> {
        try {
            if (!userId) throw new Error("User ID is required.")

            // Scope search to workbooks the user is a member of
            const memberships = await prisma.membership.findMany({
                where: { userId },
                select: { workbookId: true }
            })

            const accessibleIds = memberships.map((m: { workbookId: string; }) => m.workbookId)

            if (accessibleIds.length === 0) return []

            const workbooks = await this.repository.search({
                ...params,
                workbookIds: accessibleIds
            })

            return workbooks
        } catch (error) {
            throw error
        }
    }
}

export default WorkbookService