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
        switch(typeOfTray) {
            case 'array':
                const obj = tray.find((i) => {
                    if (keyInTrayItem !== '') {
                        return i[keyInTrayItem] === item;
                    }
                })
        }
    }

}