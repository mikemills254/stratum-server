"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_1 = require("../utilities/supabase");
const prisma_1 = require("../utilities/prisma");
class AuthMiddleware {
}
_a = AuthMiddleware;
AuthMiddleware.verify = async (req, res, next) => {
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
        const { data: { user: supabaseUser }, error } = await supabase_1.supabase.auth.getUser(token);
        if (error || !supabaseUser) {
            res.status(401).json({
                success: false,
                error: error?.message || "Invalid or expired token."
            });
            return;
        }
        const user = await prisma_1.prisma.user.upsert({
            where: { uid: supabaseUser.id },
            update: {},
            create: {
                uid: supabaseUser.id,
                email: supabaseUser.email,
                username: `${supabaseUser.user_metadata.first_name} ${supabaseUser.user_metadata.last_name}`,
                role: supabaseUser.user_metadata.role,
            }
        });
        req.user = {
            uid: user.uid,
            email: user.email,
            role: user.role,
        };
        next();
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Internal server error during authentication";
        res.status(401).json({
            success: false,
            error: errorMessage
        });
    }
};
exports.default = AuthMiddleware;
//# sourceMappingURL=auth-middlware.js.map