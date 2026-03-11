import { Request, Response } from "express";
import { IUserController } from "../types/users.types";
declare class UserController implements IUserController {
    handleSearchTeachers(req: Request, res: Response): Promise<Response>;
    handleSearchStudents(req: Request, res: Response): Promise<Response>;
}
export default UserController;
//# sourceMappingURL=user.controller.d.ts.map