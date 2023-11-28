/**
 * 
 * @param {*Number} count total number of items
 * @param {*Number} maximumItemsPerPage Number of items per page
 * @returns {*Number}
 */
export const NumberOfPages = (count, maximumItemsPerPage) => {
    return Math.ceil(Number(maximumItemsPerPage) / Number(count));
}