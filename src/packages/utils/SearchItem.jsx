/**
 * 
 * This method recursively searches for an item in array.
 * search term is matched againts all the object properties
 * 
 * @param {Array} array []
 * @param {any} searchTerm any
 * @returns Array[] of marched items
 */

export const SearchArray = (array, searchTerm) => {
    return  array.filter((item) => {
        for (const key in item) {
            const value = item[key];

            if (typeof value === 'object' && value !== null) {
                if(SearchArray([value], searchTerm).length > 0) {
                    return true;
                }
             }else if (typeof value === 'number' && !isNaN(searchTerm)) {
                if (value.toString().includes(searchTerm.toString())) {
                    return true;
                }
             }else if (typeof value === 'string' && value.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return true;
             }
        }
        return false;
    });
};