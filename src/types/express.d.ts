import { Role } from "../generated/prisma";

declare global {
    namespace Express {
        interface Request {
            user?: {
                uid: string;
                email: string;
                role?: Role;
            };
        }
    }
}
