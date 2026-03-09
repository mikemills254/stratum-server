"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const membership_controller_1 = __importDefault(require("../controllers/membership.controller"));
const router = express_1.default.Router();
const controller = new membership_controller_1.default();
router.post("/", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleAddMember(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/workbook/:workbookId/user/:userId", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleRemoveMember(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.put("/workbook/:workbookId/user/:userId", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleUpdateMemberRole(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/workbook/:workbookId", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetMembershipsByWorkbook(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.post("/assign-student", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleAssignStudent(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/workbook/:workbookId/student/:userId", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleRemoveStudent(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=membership.routes.js.map