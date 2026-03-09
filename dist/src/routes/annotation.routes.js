"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const annotation_controller_1 = require("../controllers/annotation.controller");
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const router = (0, express_1.Router)();
const controller = new annotation_controller_1.AnnotationController();
router.post("/", auth_middlware_1.default.verify, (req, res) => controller.handleCreateAnnotation(req, res));
router.get("/answer/:answerId", auth_middlware_1.default.verify, (req, res) => controller.handleGetAnnotationsByAnswer(req, res));
router.patch("/:id/resolve", auth_middlware_1.default.verify, (req, res) => controller.handleResolveAnnotation(req, res));
exports.default = router;
//# sourceMappingURL=annotation.routes.js.map