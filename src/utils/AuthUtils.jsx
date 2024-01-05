class AuthUtils {

    getItemFromStorage(key) {
        let sessionUser = localStorage.getItem(key);
        sessionUser = sessionUser ? JSON.parse(sessionUser) : null;
        return sessionUser;
    }
}
export default new AuthUtils();