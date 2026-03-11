import { Annotation } from "../../../prisma/generated/prisma";
import { ICreateAnnotation } from "../../repositories/annotation.repository";
export declare class AnnotationService {
    private repository;
    private auditLogService;
    constructor();
    createAnnotation(data: ICreateAnnotation): Promise<any>;
    getAnnotationsByAnswer(answerId: string): Promise<Annotation[]>;
    deleteAnnotation(id: string, teacherId: string): Promise<void>;
    updateAnnotation(id: string, teacherId: string, data: {
        comment?: string;
        suggestedText?: string;
    }): Promise<Annotation>;
    resolveAnnotation(id: string): Promise<Annotation>;
}
//# sourceMappingURL=annotation.service.d.ts.map