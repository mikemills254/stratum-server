"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hocuspocusServer = void 0;
const server_1 = require("@hocuspocus/server");
const extension_logger_1 = require("@hocuspocus/extension-logger");
const extension_database_1 = require("@hocuspocus/extension-database");
const supabase_1 = require("./utilities/supabase");
const prisma_1 = require("./utilities/prisma");
const prisma_2 = require("./generated/prisma");
exports.hocuspocusServer = new server_1.Hocuspocus({
    name: "stratum-collaboration",
    extensions: [
        new extension_logger_1.Logger(),
        new extension_database_1.Database({
            fetch: async ({ documentName }) => {
                // documentName will be like "worksheet:{id}" or "answer:{id}"
                const [type, id] = documentName.split(":");
                if (type === "worksheet") {
                    const worksheet = await prisma_1.prisma.worksheet.findUnique({
                        where: { id },
                        select: { yjsState: true },
                    });
                    return worksheet?.yjsState ? new Uint8Array(worksheet.yjsState) : null;
                }
                if (type === "answer") {
                    const answer = await prisma_1.prisma.answer.findUnique({
                        where: { id },
                        select: { yjsState: true },
                    });
                    return answer?.yjsState ? new Uint8Array(answer.yjsState) : null;
                }
                return null;
            },
            store: async ({ documentName, state }) => {
                const [type, id] = documentName.split(":");
                if (type === "worksheet") {
                    await prisma_1.prisma.worksheet.update({
                        where: { id },
                        data: { yjsState: Buffer.from(state) },
                    });
                }
                if (type === "answer") {
                    await prisma_1.prisma.answer.update({
                        where: { id },
                        data: { yjsState: Buffer.from(state) },
                    });
                }
            },
        }),
    ],
    async onAuthenticate({ token, documentName }) {
        if (!token) {
            throw new Error("Unauthorized");
        }
        const { data: { user: supabaseUser }, error } = await supabase_1.supabase.auth.getUser(token);
        if (error || !supabaseUser) {
            throw new Error("Invalid token");
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: { uid: supabaseUser.id },
        });
        if (!user) {
            throw new Error("User not found");
        }
        const [type, id] = documentName.split(":");
        // Role-based Access Control
        if (type === "worksheet") {
            // Check if user has membership in the workbook this worksheet belongs to
            const worksheet = await prisma_1.prisma.worksheet.findUnique({
                where: { id },
                include: { workbook: { include: { memberships: { where: { userId: user.uid } } } } }
            });
            if (!worksheet || worksheet.workbook.memberships.length === 0) {
                throw new Error("Forbidden");
            }
            const role = worksheet.workbook.memberships[0].role;
            // Logic: 
            // Director can edit title (we might handle this via REST or specialized Yjs field)
            // Teachers/Students might be read-only for the worksheet structure itself but can see questions.
            // Actually, Hocuspocus syncs the WHOLE document. 
            // We should use Yjs Awareness and sub-documents or field-level permissions in the client TipTap editor.
            return {
                user: {
                    id: user.uid,
                    name: user.username,
                    role: role,
                },
            };
        }
        if (type === "answer") {
            const answer = await prisma_1.prisma.answer.findUnique({
                where: { id },
            });
            if (!answer)
                throw new Error("Answer not found");
            // Student can edit their own answer
            if (user.role === prisma_2.Role.STUDENT && answer.studentId !== user.uid) {
                throw new Error("Forbidden");
            }
            // Teacher/Director can view/annotate
            // Membership check
            const question = await prisma_1.prisma.question.findUnique({
                where: { id: answer.questionId },
                include: { worksheet: { include: { workbook: { include: { memberships: { where: { userId: user.uid } } } } } } }
            });
            if (!question || question.worksheet.workbook.memberships.length === 0) {
                throw new Error("Forbidden");
            }
            return {
                user: {
                    id: user.uid,
                    name: user.username,
                    role: user.role,
                },
            };
        }
        throw new Error("Invalid document type");
    },
});
//# sourceMappingURL=hocuspocus.js.map