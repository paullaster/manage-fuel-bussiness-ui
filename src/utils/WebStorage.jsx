class WebStorage {
 
    storeToWebDB(storageType, resourceName, resource) {
        switch(storageType) {
            case 'local':
                localStorage.setItem(resourceName, JSON.stringify(resource));
                break;
            case 'session':
                sessionStorage.setItem(resourceName, JSON.stringify(resource));
                break;
            case 'cookie':
                const cookies = document.cookie;
                
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
        }
    }

}