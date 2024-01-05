class AuthUtils {

    getItemFromStorage(key) {
        let sessionUser = localStorage.getItem(key);
    }
}
export default new AuthUtils();