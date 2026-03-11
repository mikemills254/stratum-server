import { IWorkbookController } from "../types/workbooks.types";
import { Response, Request } from "express";
declare class WorkbookController implements IWorkbookController {
    private service;
    constructor();
    handleCreateWorkbook(req: Request, res: Response): Promise<Response>;
    handleGetWorkbook(req: Request, res: Response): Promise<Response>;
    handleEditWorkbook(req: Request, res: Response): Promise<Response>;
    handleDeleteWorkbook(req: Request, res: Response): Promise<Response>;
    handleSearchWorkbooks(req: Request, res: Response): Promise<Response>;
    handleGetWorkbookStats(req: Request, res: Response): Promise<Response>;
    handleGetExploreWorkbooks(req: Request, res: Response): Promise<Response>;
    handleJoinWorkbook(req: Request, res: Response): Promise<Response>;
}
export default WorkbookController;
//# sourceMappingURL=workbook.controller.d.ts.map