import { NextFunction, Response, Request } from "express";
import { supabase } from "../utilities/supabase";
import { prisma } from "../utilities/prisma";

export default class AuthService {
    static verify = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const authHeader = req.header("Authorization");

            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                res.status(401).json({
                    success: false,
                    error: "Access denied. No token provided."
                });
                return;
            }

            const token = authHeader.replace("Bearer ", "").trim();

            const { data: { user: supabaseUser }, error } = await supabase.auth.getUser(token);

            if (error || !supabaseUser) {
                res.status(401).json({
                    success: false,
                    error: error?.message || "Invalid or expired token."
                });
                return;
            }

            // Fetch user from Prisma to get the role
            const user = await prisma.user.findUnique({
                where: { uid: supabaseUser.id }
            });

            if (!user) {
                res.status(404).json({
                    success: false,
                    error: "User not found in database."
                });
                return;
            }

            req.user = {
                uid: user.uid,
                email: user.email,
                role: user.role,
            };

            next();
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Internal server error during authentication";
            res.status(401).json({
                success: false,
                error: errorMessage
            });
        }
    };
}
