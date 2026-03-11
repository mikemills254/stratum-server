"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationController = void 0;
const annotation_service_1 = require("../services/annotation-service/annotation.service");
class AnnotationController {
    constructor() {
        this.service = new annotation_service_1.AnnotationService();
    }
    async handleCreateAnnotation(req, res) {
        try {
            const user = req.user;
            if (!user || user.role !== "TEACHER") {
                return res.status(403).json({ message: "Only teachers can annotate", success: false });
            }
            const { answerId, comment, suggestedText } = req.body;
            if (!answerId || !comment) {
                return res.status(400).json({ message: "Answer ID and comment are required", success: false });
            }
            const annotation = await this.service.createAnnotation({
                answerId,
                teacherId: user.uid,
                comment,
                suggestedText,
            });
            return res.status(201).json({
                message: "Annotation created successfully",
                data: annotation,
                success: true,
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
    async handleGetAnnotationsByAnswer(req, res) {
        try {
            const { answerId } = req.params;
            const annotations = await this.service.getAnnotationsByAnswer(answerId);
            return res.status(200).json({
                message: "Success",
                data: annotations,
                success: true,
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }
    async handleResolveAnnotation(req, res) {
        try {
            const { id } = req.params;
            const annotation = await this.service.resolveAnnotation(id);
            return res.status(200).json({
                message: "Annotation resolved",
                data: annotation,
                success: true,
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    }
    async handleUpdateAnnotation(req, res) {
        try {
            const user = req.user;
            if (!user || user.role !== "TEACHER") {
                return res.status(403).json({ message: "Only teachers can update annotations", success: false });
            }
            const { id } = req.params;
            const { comment, suggestedText } = req.body;
            const annotation = await this.service.updateAnnotation(id, user.uid, { comment, suggestedText });
            return res.status(200).json({
                message: "Annotation updated successfully",
                data: annotation,
                success: true,
            });
        }
        catch (error) {
            return res.status(error instanceof Error && error.message.includes("owner") ? 403 : 500).json({
                message: error instanceof Error ? error.message : "Internal server error",
                success: false,
            });
        }
    }
    async handleDeleteAnnotation(req, res) {
        try {
            const user = req.user;
            if (!user || user.role !== "TEACHER") {
                return res.status(403).json({ message: "Only teachers can delete annotations", success: false });
            }
            const { id } = req.params;
            await this.service.deleteAnnotation(id, user.uid);
            return res.status(200).json({
                message: "Annotation deleted successfully",
                success: true,
            });
        }
        catch (error) {
            return res.status(error instanceof Error && error.message.includes("owner") ? 403 : 500).json({
                message: error instanceof Error ? error.message : "Internal server error",
                success: false,
            });
        }
    }
}
exports.AnnotationController = AnnotationController;
//# sourceMappingURL=annotation.controller.js.map