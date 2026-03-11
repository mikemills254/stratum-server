"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middlware_1 = __importDefault(require("../middlewares/auth-middlware"));
const audit_log_controller_1 = require("../controllers/audit-log.controller");
const router = express_1.default.Router();
const controller = new audit_log_controller_1.AuditLogController();
router.get("/", auth_middlware_1.default.verify, async (req, res, next) => {
    try {
        await controller.handleGetLogs(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=audit-log.routes.js.map