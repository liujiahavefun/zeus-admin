var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from '@/utils/request';
export function query() {
    return __awaiter(this, void 0, void 0, function* () {
        return request('/api/users');
    });
}
export function queryCurrent() {
    return __awaiter(this, void 0, void 0, function* () {
        return request('/api/currentUser');
    });
}
//# sourceMappingURL=user.js.map