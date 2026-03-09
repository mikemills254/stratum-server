import { Request, Response } from "express";
export declare class GradeController {
    private service;
    constructor();
    handleAssignGrade(req: Request, res: Response): Promise<Response>;
    handleApproveGrade(req: Request, res: Response): Promise<Response>;
    handleGetPendingApprovals(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=grade.controller.d.ts.map