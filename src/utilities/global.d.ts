import { Role } from "../generated/prisma";

export declare global {
  namespace Express {
    interface Request {
        user?: {
            uid: string;
            email: string;
            role: Role;
        };
    }
  }
}