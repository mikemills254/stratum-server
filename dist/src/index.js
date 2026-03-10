"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const hocuspocus_1 = require("./hocuspocus");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const port = process.env.PORT || 3000;
const wss = new ws_1.WebSocketServer({ noServer: true });
const workbook_routes_1 = __importDefault(require("./routes/workbook.routes"));
const worksheet_routes_1 = __importDefault(require("./routes/worksheet.routes"));
const membership_routes_1 = __importDefault(require("./routes/membership.routes"));
const question_routes_1 = __importDefault(require("./routes/question.routes"));
const answer_routes_1 = __importDefault(require("./routes/answer.routes"));
const grade_routes_1 = __importDefault(require("./routes/grade.routes"));
const annotation_routes_1 = __importDefault(require("./routes/annotation.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
app.use((0, morgan_1.default)('combined'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/workbook", workbook_routes_1.default);
app.use("/api/v1/worksheet", worksheet_routes_1.default);
app.use("/api/v1/membership", membership_routes_1.default);
app.use("/api/v1/question", question_routes_1.default);
app.use("/api/v1/answer", answer_routes_1.default);
app.use("/api/v1/grade", grade_routes_1.default);
app.use("/api/v1/annotation", annotation_routes_1.default);
app.use("/api/v1/auth", auth_routes_1.default);
app.use("/api/v1/user", user_routes_1.default);
app.get('/', (req, res) => {
    res.json({ message: 'Stratum Server is running!' });
});
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        hocuspocus_1.hocuspocusServer.handleConnection(ws, request);
    });
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map