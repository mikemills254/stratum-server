import { NextFunction, Response, Request } from "express";
import { IWorksheetService } from "../types/worksheets.types";
declare class WorkSheetsController {
    private service;
    constructor(service: IWorksheetService);
    handleCreateWorkSheet(req: Request, res: Response, next: NextFunction): Promise<Response>;
    handleGetWorksheet(req: Request, res: Response, next: NextFunction): Promise<Response>;
    handleEditWorksheet(req: Request, res: Response, next: NextFunction): Promise<Response>;
    handleDeleteWorksheet(req: Request, res: Response, next: NextFunction): Promise<Response>;
    handleGetWorksheetsByWorkbook(req: Request, res: Response, next: NextFunction): Promise<Response>;
}
export default WorkSheetsController;
//# sourceMappingURL=worksheets.controller.d.ts.map