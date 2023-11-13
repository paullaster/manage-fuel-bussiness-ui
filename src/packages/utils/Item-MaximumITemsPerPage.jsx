/**
 * 
 * @param {*Number} currentPage 
 * @param {*Number} maximumItemsPerPage 
 * @returns {*string}
 */

export const ItemAndMaximumItemsPerPage = (currentPage, maximumItemsPerPage) => {
    const currentMaxItems = currentPage * maximumItemsPerPage;
    if (Number(currentPage) === 1) {
        return `${currentPage} - ${currentMaxItems}`;
    }
    const startMin = (Number(maximumItemsPerPage) * (Number(currentPage -1))) + 1;
    return `${startMin} - ${currentMaxItems}`;
}