/**
 * 
 * @param {Array} data []
 * @param {Array} headers []
 */

export const Dynamicwidth = (data, headers) => {
    const numberOfHeaders = 1000;
    const headersWithWidthValue = headers.map((header) => {
        return data.map((value) =>{
            let strLength = value[header.value].length;
            let setWidth = Math.ceil((strLength / numberOfHeaders) *100)
             header = {
                ...header,
                width: setWidth,
             }
             return header;
        })
    });
    return headersWithWidthValue.flat();
}