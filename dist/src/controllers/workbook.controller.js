"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workbook_service_1 = __importDefault(require("../services/workbook-service/workbook.service"));
class WorkbookController {
    constructor() {
        this.service = new workbook_service_1.default();
    }
    async handleCreateWorkbook(req, res) {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({
                    message: "Unauthorised",
                    success: false
                });
            }
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({
                    message: "Invalid required field. Name is required",
                    success: false
                });
            }
            const workbook = await this.service.createWorkbook(user.uid, req.body);
            return res.status(200).json({
                message: "Success",
                data: workbook,
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
    async handleGetWorkbook(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: "Workbook ID is required", success: false });
            const workbook = await this.service.getWorkbook(user.uid, id);
            return res.status(200).json({
                message: "Success",
                data: workbook,
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
    async handleEditWorkbook(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: "Workbook ID is required", success: false });
            const workbook = await this.service.editWorkbook(user.uid, id, req.body);
            return res.status(200).json({
                message: "Success",
                data: workbook,
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
    async handleDeleteWorkbook(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: "Workbook ID is required", success: false });
            await this.service.deleteWorkbook(user.uid, id);
            return res.status(200).json({
                message: "Success",
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
    async handleSearchWorkbooks(req, res) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const { query, tag, directorId, limit, offset } = req.query;
            const workbooks = await this.service.searchWorkbooks(user.uid, {
                query,
                tag,
                directorId,
                limit: limit ? parseInt(limit) : undefined,
                offset: offset ? parseInt(offset) : undefined
            });
            return res.status(200).json({
                message: "Success",
                data: workbooks,
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}
exports.default = WorkbookController;
//# sourceMappingURL=workbook.controller.js.map