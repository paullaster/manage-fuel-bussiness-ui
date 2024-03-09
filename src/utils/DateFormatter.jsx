export const YearMonthDate = (date) => {
    const dateObj = new Date(date);
    /*${dateObj.getHours()}:${dateObj.getMinutes() < 10 ? prefixZero(dateObj.getMinutes()) : dateObj.getMinutes() }:${dateObj.getSeconds() < 10 ? prefixZero(dateObj.getSeconds()) : dateObj.getSeconds()}*/
    const formattedDate = `
    ${dateObj.getFullYear()}-${dateObj.getMonth() < 10 ? prefixZero(dateObj.getMonth() + 1): dateObj.getMonth() + 1 }-${dateObj.getDate() < 10 ? prefixZero(dateObj.getDate() + 1) : dateObj.getDate() + 1}`;
    return formattedDate;
}

const prefixZero = (value) => {
    return `0${value}`
}