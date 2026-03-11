import "dotenv/config";
import express from "express";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import http from "http";
import { WebSocketServer } from "ws";
import { hocuspocusServer } from "./hocuspocus";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const wss = new WebSocketServer({ noServer: true });

import workbookRoutes from "./routes/workbook.routes"
import worksheetRoutes from "./routes/worksheet.routes"
import membershipRoutes from "./routes/membership.routes"
import questionRoutes from "./routes/question.routes"
import answerRoutes from "./routes/answer.routes"
import gradeRoutes from "./routes/grade.routes"
import annotationRoutes from "./routes/annotation.routes"
import authRoutes from "./routes/auth.routes"
import userRoutes from "./routes/user.routes"
import auditLogRoutes from "./routes/audit-log.routes"

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin) return callback(null, true);
    console.log("request origin:", origin);
    
    if (
      origin.startsWith("http://localhost") ||
      origin.startsWith("http://127.0.0.1")
    ) {
      return callback(null, true);
    }
    
    if (origin === process.env.CLIENT_BASE_URL) {
      return callback(null, true);
    }
    
    console.warn(`CORS blocked origin: ${origin}`);
    callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.options('*', cors(corsOptions));

app.use((req, res, next) => {
    console.log("=== INCOMING REQUEST ===");
    console.log("Method:", req.method);
    console.log("Path:", req.path);
    console.log("Origin header:", req.headers.origin);
    console.log("CLIENT_BASE_URL env:", process.env.CLIENT_BASE_URL);
    console.log("Match:", req.headers.origin === process.env.CLIENT_BASE_URL);
    next();
});
app.use(cors(corsOptions));

app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/workbook", workbookRoutes);
app.use("/api/v1/worksheet", worksheetRoutes);
app.use("/api/v1/membership", membershipRoutes);
app.use("/api/v1/question", questionRoutes);
app.use("/api/v1/answer", answerRoutes);
app.use("/api/v1/grade", gradeRoutes);
app.use("/api/v1/annotation", annotationRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/audit-log", auditLogRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Stratum Server is running!" });
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    hocuspocusServer.handleConnection(ws, request);
  });
});

server.listen(Number(port), '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
