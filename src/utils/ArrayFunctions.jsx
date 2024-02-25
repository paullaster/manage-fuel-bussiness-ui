import { generator } from "./Generator";

export const ArrayFunctions = (obj, arr) => {
    const operationList = {
        equal: equality,

    };
    const comparisonOp = operationList[obj.op];
    const keyInArr = obj.arrKey;
    const keyInItem = obj.itemKey;
    const proptoUpdate = obj.propToUpdate;
    const update = obj.update;
    console.log(update);
    switch(obj.type) {
        case 'map':
            return arr.map((i) => {
                if (comparisonOp(i[keyInArr], obj.item[keyInItem])) {
                    console.log({ 
                        ...i,
                        [proptoUpdate]: update
                    });
                    return { 
                        ...i,
                        [proptoUpdate]: update
                    }
                }
                return i;
            })
        case 'filter':
            return {};
        default: return new Error('Undefined type');
    }
}

const equality = (a, b) => a === b;


export const AddIDFieldToArray = (array, value) => {
    const arrayWithID = [];
    for (const item of generator(array)) {
        item.id = item[value];
        arrayWithID.push(item);
    }
    return Array.from(new Set(arrayWithID));

}