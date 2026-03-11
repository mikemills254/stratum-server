import { Role } from "../../prisma/generated/prisma";
import { Request, Response } from "express";
export interface IUserController {
    handleSearchTeachers(req: Request, res: Response): Promise<Response>;
    handleSearchStudents(req: Request, res: Response): Promise<Response>;
}
export interface IUserSearchQuery {
    query: string;
    role?: Role;
}
//# sourceMappingURL=users.types.d.ts.map