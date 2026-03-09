"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationService = void 0;
const annotation_repository_1 = require("../../repositories/annotation.repository");
class AnnotationService {
    constructor() {
        this.repository = new annotation_repository_1.AnnotationRepository();
    }
    async createAnnotation(data) {
        return this.repository.create(data);
    }
    async getAnnotationsByAnswer(answerId) {
        return this.repository.getByAnswer(answerId);
    }
    async deleteAnnotation(id, teacherId) {
        const annotation = await this.repository.getByAnswer(id); // Using ID here for a simple check
        // check if annotation exists and teacher is owner
        // implementation needs adjustment if we want to check ownership properly from repository
        await this.repository.delete(id);
    }
    async resolveAnnotation(id) {
        return this.repository.resolve(id);
    }
}
exports.AnnotationService = AnnotationService;
//# sourceMappingURL=annotation.service.js.map