import { Request, Response } from "express";
import WorksheetService from "../services/worksheet-service/worksheet.service";
import { IWorksheetController, IWorksheetService } from "../types/worksheets.types";

class WorksheetController implements IWorksheetController {
    private service: IWorksheetService

    constructor() {
        this.service = new WorksheetService()
    }

    async handleCreateWorksheet(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const { title, workbookId } = req.body
            if (!title || !workbookId) {
                return res.status(400).json({
                    message: "Title and Workbook ID are required.",
                    success: false
                })
            }

            const worksheet = await this.service.createWorksheet(user.uid, req.body)
            return res.status(201).json({
                message: "Worksheet created successfully.",
                data: worksheet,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleGetWorksheet(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "Worksheet ID is required", success: false })

            const worksheet = await this.service.getWorksheet(user.uid, id)
            return res.status(200).json({
                message: "Success",
                data: worksheet,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleEditWorksheet(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "Worksheet ID is required", success: false })

            const worksheet = await this.service.editWorksheet(user.uid, id, req.body)
            return res.status(200).json({
                message: "Worksheet updated successfully.",
                data: worksheet,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleDeleteWorksheet(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "Worksheet ID is required", success: false })

            await this.service.deleteWorksheet(user.uid, id)
            return res.status(200).json({
                message: "Worksheet deleted successfully.",
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }

    async handleGetWorksheetsByWorkbook(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const workbookId = req.params.workbookId as string
            if (!workbookId) {
                return res.status(400).json({
                    message: "Workbook ID is required.",
                    success: false
                })
            }

            const worksheets = await this.service.getWorksheetsByWorkbook(user.uid, workbookId)
            return res.status(200).json({
                message: "Success",
                data: worksheets,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            })
        }
    }
}

export default WorksheetController
