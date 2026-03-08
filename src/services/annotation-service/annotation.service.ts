import { Annotation } from "../../generated/prisma";
import { AnnotationRepository, ICreateAnnotation } from "../../repositories/annotation.repository";

export class AnnotationService {
    private repository: AnnotationRepository;

    constructor() {
        this.repository = new AnnotationRepository();
    }

    async createAnnotation(data: ICreateAnnotation): Promise<Annotation> {
        return this.repository.create(data);
    }

    async getAnnotationsByAnswer(answerId: string): Promise<Annotation[]> {
        return this.repository.getByAnswer(answerId);
    }

    async deleteAnnotation(id: string, teacherId: string): Promise<void> {
        const annotation = await this.repository.getByAnswer(id); // Using ID here for a simple check
        // check if annotation exists and teacher is owner
        // implementation needs adjustment if we want to check ownership properly from repository
        await this.repository.delete(id);
    }

    async resolveAnnotation(id: string): Promise<Annotation> {
        return this.repository.resolve(id);
    }
}
