import { NextFunction, Response, Request } from "express";
export default class AuthService {
    static verify: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
//# sourceMappingURL=auth-middlware.d.ts.map