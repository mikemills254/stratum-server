import { Annotation } from "../../prisma/generated/prisma";
export interface ICreateAnnotation {
    answerId: string;
    teacherId: string;
    comment: string;
    suggestedText?: string;
}
export declare class AnnotationRepository {
    create(data: ICreateAnnotation): Promise<Annotation>;
    getByAnswer(answerId: string): Promise<Annotation[]>;
    getById(id: string): Promise<Annotation | null>;
    update(id: string, data: Partial<Annotation>): Promise<Annotation>;
    delete(id: string): Promise<void>;
    resolve(id: string): Promise<Annotation>;
}
//# sourceMappingURL=annotation.repository.d.ts.map