"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorkSheetsController {
    constructor(service) {
        this.service = service;
    }
    async handleCreateWorkSheet(req, res, next) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const workbookId = req.params.workbookId;
            const { title, description } = req.body;
            if (!workbookId) {
                return res.status(400).json({
                    message: "Workbook ID is required.",
                    success: false
                });
            }
            if (!title) {
                return res.status(400).json({
                    message: "Title is required.",
                    success: false
                });
            }
            const worksheet = await this.service.createWorksheet(user.uid, {
                title,
                description,
                workbookId
            });
            return res.status(201).json({
                message: "Worksheet created successfully.",
                data: worksheet,
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
    async handleGetWorksheet(req, res, next) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const worksheetId = req.params.worksheetId;
            if (!worksheetId) {
                return res.status(400).json({
                    message: "Worksheet ID is required.",
                    success: false
                });
            }
            const worksheet = await this.service.getWorksheet(user.uid, worksheetId);
            return res.status(200).json({
                message: "Success",
                data: worksheet,
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
    async handleEditWorksheet(req, res, next) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const worksheetId = req.params.worksheetId;
            if (!worksheetId) {
                return res.status(400).json({
                    message: "Worksheet ID is required.",
                    success: false
                });
            }
            const updated = await this.service.editWorksheet(user.uid, worksheetId, req.body);
            return res.status(200).json({
                message: "Worksheet updated successfully.",
                data: updated,
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
    async handleDeleteWorksheet(req, res, next) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const worksheetId = req.params.worksheetId;
            if (!worksheetId) {
                return res.status(400).json({
                    message: "Worksheet ID is required.",
                    success: false
                });
            }
            await this.service.deleteWorksheet(user.uid, worksheetId);
            return res.status(200).json({
                message: "Worksheet deleted successfully.",
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
    async handleGetWorksheetsByWorkbook(req, res, next) {
        try {
            const user = req.user;
            if (!user)
                return res.status(401).json({ message: "Unauthorised", success: false });
            const workbookId = req.params.workbookId;
            if (!workbookId) {
                return res.status(400).json({
                    message: "Workbook ID is required.",
                    success: false
                });
            }
            const worksheets = await this.service.getWorksheetsByWorkbook(user.uid, workbookId);
            return res.status(200).json({
                message: "Success",
                data: worksheets,
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
exports.default = WorkSheetsController;
//# sourceMappingURL=worksheets.controller.js.map