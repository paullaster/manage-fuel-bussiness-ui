export const YearMonthDate = (date) => {
    const dateObj = new Date(date);
    const formattedDate = `${dateObj.getFullYear()}-0${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
    return formattedDate;
}