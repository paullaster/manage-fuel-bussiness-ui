export const GetPropertyValue = (arr, item, field, desiredFieldValue = null) => {
    const found = arr?.find((it) => it[field] === item);
    return found ? desiredFieldValue ? found[desiredFieldValue] : found[field] : undefined;
}