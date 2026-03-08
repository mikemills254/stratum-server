"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("../utilities/supabase.js");
class AuthService {
}
_a = AuthService;
AuthService.verify = async (req, res, next) => {
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
        const { data: { user: supabaseUser }, error } = await supabase_js_1.supabase.auth.getUser(token);
        if (error || !supabaseUser) {
            res.status(401).json({
                success: false,
                error: error?.message || "Invalid or expired token."
            });
            return;
        }
        req.user = {
            uid: supabaseUser.id,
            email: supabaseUser.email ?? "",
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
exports.default = AuthService;
//# sourceMappingURL=auth-middlware.js.map