import WorkbookService from "../services/workbook-service/workbook.service";
import { IWorkbookController, IWorkbookService, ICreateWorkBook, ISearchWorkBook } from "../types/workbooks.types";
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
    async handleGetWorkbookStats(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const id = req.params.id as string
            if (!id) return res.status(400).json({ message: "Workbook ID is required", success: false })

            const stats = await this.service.getWorkbookStats(user.uid, id)

            return res.status(200).json({
                message: "Success",
                data: stats,
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

    async handleGetExploreWorkbooks(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const queryParams: ISearchWorkBook = {
                query: req.query.query as string,
                tag: req.query.tag as string,
                limit: req.query.limit ? Number(req.query.limit) : undefined,
                offset: req.query.offset ? Number(req.query.offset) : undefined
            }

            const workbooks = await this.service.searchExploreWorkbooks(user.uid, queryParams)
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

    async handleJoinWorkbook(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.user
            if (!user) return res.status(401).json({ message: "Unauthorised", success: false })

            const { workbookId } = req.body
            if (!workbookId) {
                return res.status(400).json({
                    message: "Workbook ID is required.",
                    success: false
                })
            }

            await this.service.joinWorkbook(user.uid, workbookId)
            return res.status(200).json({
                message: "Joined workbook successfully.",
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