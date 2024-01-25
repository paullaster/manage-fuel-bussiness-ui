export const ObjectValidator = (requiredFields, Obj) => {
    const requiredFieldsSet = new Set([
        ...requiredFields
    ]);

    const missingRequiredFields = [];

    for (let prop in Obj) {
        if (requiredFields.has(prop) && !Obj[prop]) {
            missingRequiredFields.push(prop);
        }
    }
    if (missingRequiredFields.length) {
        throw new Error(`The following required fields are missing: ${missingFields.join(", ")}`);
    }
    return true;

}