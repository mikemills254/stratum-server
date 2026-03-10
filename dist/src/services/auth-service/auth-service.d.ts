import { IAuthService } from "../../types/auth.types";
import { Role } from "../../../prisma/generated/prisma";
declare class AuthService implements IAuthService {
    private mailService;
    constructor();
    verifyTwoFactorCode(uid: string, code: string): Promise<void>;
    requestTwoFactorCode(uid: string, role: Role): Promise<void>;
    private sendTwoFactorCodeEmail;
}
export default AuthService;
//# sourceMappingURL=auth-service.d.ts.map