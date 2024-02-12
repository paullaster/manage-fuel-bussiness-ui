import WebStorage from "../../utils/WebStorage";
import { APPNAME } from "../../environments";
class AuthService {
    caccessToken = null;
    refreshtoken = null;
    user = null;

    constructor() {
        this.accessToken = WebStorage.GetFromWebStorage('session', `${APPNAME}_accessToken`);
        this.refreshtoken = WebStorage.GetFromWebStorage('local', `${APPNAME}_refreshToken`);

    }
    Login(accessToken, refreshToken) {
        this.accessToken = accessToken;
        this.refreshtoken = refreshToken;
        WebStorage.RemoveFromStorage('session', `${APPNAME}_accessToken`);
        WebStorage.RemoveFromStorage('local', `${APPNAME}_refreshToken`);
        WebStorage.storeToWebDB('session', `${APPNAME}_accessToken`, accessToken);
        WebStorage.storeToWebDB('local', `${APPNAME}_refreshToken`, refreshToken);

    }
}

Object.freeze(AuthService);

export default new AuthService()