import { Request, Response } from "express";
import { IMembershipController } from "../types/memberships.types";
declare class MembershipController implements IMembershipController {
    private service;
    private studentService;
    constructor();
    handleAddMember(req: Request, res: Response): Promise<Response>;
    handleRemoveMember(req: Request, res: Response): Promise<Response>;
    handleUpdateMemberRole(req: Request, res: Response): Promise<Response>;
    handleGetMembershipsByWorkbook(req: Request, res: Response): Promise<Response>;
    handleAssignStudent(req: Request, res: Response): Promise<Response>;
    handleRemoveStudent(req: Request, res: Response): Promise<Response>;
}
export default MembershipController;
//# sourceMappingURL=membership.controller.d.ts.map