"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const worksheet_controller_1 = __importDefault(require("../controllers/worksheet.controller"));
const router = express_1.default.Router();
const controller = new worksheet_controller_1.default();
router.post("/", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleCreateWorksheet(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetWorksheet(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.put("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleEditWorksheet(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/:id", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleDeleteWorksheet(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.get("/workbook/:workbookId", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetWorksheetsByWorkbook(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=worksheet.routes.js.map