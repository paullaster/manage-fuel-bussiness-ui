class WebStorage {
 
    storeToWebDB(storageType, resourceName, resource) {
        switch(storageType) {
            case 'local':
                localStorage.setItem(resourceName, JSON.stringify(resource));
                break;
            case
        }
    }

}