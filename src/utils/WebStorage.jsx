class WebStorage {
 
    storeToWebDB(storageType, resourceName, resource) {
        let cookies = document.cookie;
        let foundResource = '';
        switch(storageType) {
            case 'local':
                localStorage.setItem(resourceName, JSON.stringify(resource));
                break;
            case 'session':
                sessionStorage.setItem(resourceName, JSON.stringify(resource));
                break;
            case 'cookie':
                foundResource = this.CheckItemIfExist(cookies.split(';'), `${resourceName}=`, 'array');
                if(!foundResource) {
                    document.cookie = `${resourceName}=${resource}`
                }
                foundResource = '';
                
                
        }
    }
    CheckItemIfExist(tray, item, typeOfTray, keyInTrayItem =  '') {
        let obj = {}
        switch(typeOfTray) {
            case 'array':
                obj = tray.find((i) => {
                    if (keyInTrayItem !== '') {
                        return i[keyInTrayItem] === item;
                    }
                    return i === item;
                });
                return obj;
            case 'object':
                return tray[item];
            default: return new Error("Undefied Type");
        }
    }

}