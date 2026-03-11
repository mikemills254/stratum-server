"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const workbook_controller_1 = __importDefault(require("../controllers/workbook.controller"));
const router = express_1.default.Router();
const controller = new workbook_controller_1.default;
router.post("/", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleCreateWorkbook(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleSearchWorkbooks(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetWorkbook(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.put("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleEditWorkbook(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleDeleteWorkbook(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/:id/stats", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetWorkbookStats(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/browse/explore", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetExploreWorkbooks(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.post("/join", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleJoinWorkbook(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=workbook.routes.js.map