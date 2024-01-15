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
                foundResource = this.CheckItemIfExist(cookies.split(';'), `${resourceName}=`, 'array', keyInTrayItem = '', true);
                if(!foundResource) {
                    document.cookie = `${resourceName}=${resource}`
                }
                cookies = cookies.filter((ft) => {
                    return `${ft}=` !== `${resourceName}=`;
                });
                cookies +=`${resourceName}=${resource}`;
                document.cookie = cookies;

                
        }
    }
    CheckItemIfExist(tray, item, typeOfTray, keyInTrayItem =  '', isCookie = false) {
        let obj = {}
        switch(typeOfTray) {
            case 'array':
                obj = tray.find((i) => {
                    if (keyInTrayItem !== '') {
                        return i[keyInTrayItem] === item;
                    }
                    if(isCookie) {
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

}