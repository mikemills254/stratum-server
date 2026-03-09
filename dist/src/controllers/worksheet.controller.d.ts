import { Request, Response } from "express";
import { IWorksheetController } from "../types/worksheets.types";
declare class WorksheetController implements IWorksheetController {
    private service;
    constructor();
    handleCreateWorksheet(req: Request, res: Response): Promise<Response>;
    handleGetWorksheet(req: Request, res: Response): Promise<Response>;
    handleEditWorksheet(req: Request, res: Response): Promise<Response>;
    handleDeleteWorksheet(req: Request, res: Response): Promise<Response>;
    handleGetWorksheetsByWorkbook(req: Request, res: Response): Promise<Response>;
}
export default WorksheetController;
//# sourceMappingURL=worksheet.controller.d.ts.map