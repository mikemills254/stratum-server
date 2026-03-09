import { Request, Response } from "express";
export declare class AnnotationController {
    private service;
    constructor();
    handleCreateAnnotation(req: Request, res: Response): Promise<Response>;
    handleGetAnnotationsByAnswer(req: Request, res: Response): Promise<Response>;
    handleResolveAnnotation(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=annotation.controller.d.ts.map