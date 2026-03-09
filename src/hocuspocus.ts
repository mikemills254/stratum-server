import { Hocuspocus, onAuthenticatePayload } from "@hocuspocus/server";
import { Logger } from "@hocuspocus/extension-logger";
import { Database } from "@hocuspocus/extension-database";
import { supabase } from "./utilities/supabase";
import { prisma } from "./utilities/prisma";
import { Role } from "../prisma/generated/prisma";

export const hocuspocusServer = new Hocuspocus({
    name: "stratum-collaboration",
    extensions: [
        new Logger(),
        new Database({
            fetch: async ({ documentName }) => {
                // documentName will be like "worksheet:{id}" or "answer:{id}"
                const [type, id] = documentName.split(":");

                if (type === "worksheet") {
                    const worksheet = await prisma.worksheet.findUnique({
                        where: { id },
                        select: { yjsState: true },
                    });
                    return worksheet?.yjsState ? new Uint8Array(worksheet.yjsState) : null;
                }

                if (type === "answer") {
                    const answer = await prisma.answer.findUnique({
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
                    await prisma.worksheet.update({
                        where: { id },
                        data: { yjsState: Buffer.from(state) },
                    });
                }

                if (type === "answer") {
                    await prisma.answer.update({
                        where: { id },
                        data: { yjsState: Buffer.from(state) },
                    });
                }
            },
        }),
    ],

    async onAuthenticate({ token, documentName }: onAuthenticatePayload) {
        if (!token) {
            throw new Error("Unauthorized");
        }

        const { data: { user: supabaseUser }, error } = await supabase.auth.getUser(token);

        if (error || !supabaseUser) {
            throw new Error("Invalid token");
        }

        const user = await prisma.user.findUnique({
            where: { uid: supabaseUser.id },
        });

        if (!user) {
            throw new Error("User not found");
        }

        const [type, id] = documentName.split(":");

        // Role-based Access Control
        if (type === "worksheet") {
            // Check if user has membership in the workbook this worksheet belongs to
            const worksheet = await prisma.worksheet.findUnique({
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
            const answer = await prisma.answer.findUnique({
                where: { id },
            });

            if (!answer) throw new Error("Answer not found");

            // Student can edit their own answer
            if (user.role === Role.STUDENT && answer.studentId !== user.uid) {
                throw new Error("Forbidden");
            }

            // Teacher/Director can view/annotate
            // Membership check
            const question = await prisma.question.findUnique({
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
