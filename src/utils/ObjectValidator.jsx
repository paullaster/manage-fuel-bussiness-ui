export const ObjectValidator = (requiredFields, Obj) => {
    const requiredFieldsSet = new Set(requiredFields);

    const missingRequiredFields = [];

    for (let prop in Obj) {
        if (requiredFieldsSet.has(prop) && !Obj[prop]) {
            missingRequiredFields.push(prop);
        }
    }
    if (missingRequiredFields.length) {
        throw new Error(`The following required fields are missing: ${missingRequiredFields.join(", ")}`);
    }
    return true;

}