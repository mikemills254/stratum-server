"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grade_controller_1 = require("../controllers/grade.controller");
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const router = (0, express_1.Router)();
const controller = new grade_controller_1.GradeController();
router.post("/", auth_middlware_1.default.verify, (req, res) => controller.handleAssignGrade(req, res));
router.patch("/:id/approve", auth_middlware_1.default.verify, (req, res) => controller.handleApproveGrade(req, res));
router.get("/pending", auth_middlware_1.default.verify, (req, res) => controller.handleGetPendingApprovals(req, res));
exports.default = router;
//# sourceMappingURL=grade.routes.js.map