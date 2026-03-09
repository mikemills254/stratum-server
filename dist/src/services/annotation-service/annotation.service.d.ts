import { Annotation } from "../../generated/prisma";
import { ICreateAnnotation } from "../../repositories/annotation.repository";
export declare class AnnotationService {
    private repository;
    constructor();
    createAnnotation(data: ICreateAnnotation): Promise<Annotation>;
    getAnnotationsByAnswer(answerId: string): Promise<Annotation[]>;
    deleteAnnotation(id: string, teacherId: string): Promise<void>;
    resolveAnnotation(id: string): Promise<Annotation>;
}
//# sourceMappingURL=annotation.service.d.ts.map