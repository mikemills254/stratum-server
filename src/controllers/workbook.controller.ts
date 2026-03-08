import WorkbookService from "../services/workbook-service/workbook.service";
import { IWorkbookController, IWorkbookService } from "../types/workbooks.types";
import { Response, Request } from "express";

class WorkbookController implements IWorkbookController {
    private service: IWorkbookService

    constructor() {
        this.service = new WorkbookService()
    }
    async handleCreateWorkbook(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user

            if (!user) {
                return res.status(401).json({
                    message: "Unauthorised",
                    success: false
                })
            }

            const { name } = req.body

            if (!name) {
                return res.status(400).json({
                    message: "Invalid required field. Name is required",
                    success: false
                })
            }

            const workbook = await this.service.createWorkbook(user.uid, req.body)

            return res.status(200).json({
                message: "Success",
                data: workbook,
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

    async handleGetWorkbook(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "Workbook ID is required", success: false })

            const workbook = await this.service.getWorkbook(user.uid, id)

            return res.status(200).json({
                message: "Success",
                data: workbook,
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

    async handleEditWorkbook(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "Workbook ID is required", success: false })

            const workbook = await this.service.editWorkbook(user.uid, id, req.body)

            return res.status(200).json({
                message: "Success",
                data: workbook,
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

    async handleDeleteWorkbook(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "Workbook ID is required", success: false })

            await this.service.deleteWorkbook(user.uid, id)

            return res.status(200).json({
                message: "Success",
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

    async handleSearchWorkbooks(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const { query, tag, directorId, limit, offset } = req.query as any

            const workbooks = await this.service.searchWorkbooks(user.uid, {
                query,
                tag,
                directorId,
                limit: limit ? parseInt(limit) : undefined,
                offset: offset ? parseInt(offset) : undefined
            })

            return res.status(200).json({
                message: "Success",
                data: workbooks,
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

export default WorkbookController