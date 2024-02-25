class WebStorage {

    storeToWebDB(storageType, resourceName, resource) {
        let cookies = document.cookie;
        let foundResource = '';
        switch (storageType) {
            case 'local':
                localStorage.setItem(resourceName, JSON.stringify(resource));
                break;
            case 'session':
                sessionStorage.setItem(resourceName, JSON.stringify(resource));
                break;
            case 'cookie':
                foundResource = this.CheckItemIfExist(cookies.split(';'), `${resourceName}=`, 'array', '', true);
                if (!foundResource) {
                    document.cookie = `${resourceName}=${resource}`
                }
                cookies = cookies.filter((ft) => {
                    return `${ft}=` !== `${resourceName}=`;
                });
                cookies += `${resourceName}=${resource}`;
                document.cookie = cookies;
                break;

            default: return new Error("Unknown Web storage");
        }
    }
    CheckItemIfExist(tray, item, typeOfTray, keyInTrayItem = '', isCookie = false) {
        let obj = {}
        switch (typeOfTray) {
            case 'array':
                obj = tray.find((i) => {
                    if (keyInTrayItem !== '') {
                        return i[keyInTrayItem] === item;
                    }
                    if (isCookie) {
                        return `${i}=` === item;
                    }
                    return i === item;
                });
                return obj;
            case 'object':
                return tray[item];
            default: return new Error("Undefied Type");
        }
    }
    GetFromWebStorage(storageType, resourceName) {
        let resource = '';
        switch (storageType) {
            case 'local':
                resource = localStorage.getItem(resourceName) || 'null';
                resource = JSON.parse(resource);
                return resource;
            case 'session':
                resource = sessionStorage.getItem(resourceName) || 'null';
                resource = JSON.parse(resource);
                return resource;
            case 'cookie':
                resource = this.CheckItemIfExist(cookies.split(';'), `${resourceName}=`, 'array', '', true);
                return resource;
        }
    }
    RemoveFromStorage(storageType, resourceName) {
        switch (storageType) {
            case 'local':
                localStorage.removeItem(resourceName);
                break;
            case 'session':
                sessionStorage.removeItem(resourceName);
                break;
            case 'cookie':
                this.CheckItemIfExist(cookies.split(';'), `${resourceName}=`, 'array', '', true);
                break;
        }
    }

}

export default new WebStorage();