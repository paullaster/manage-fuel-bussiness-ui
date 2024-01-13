const ArrayFunctions = (obj, arr) => {
    const operationList = {
        equal: 'equality',

    };
    const comparisonOp = operationList[obj.op];
    const keyInArr = obj[objKey];
    const keyInItem = obj[itemKey];
    const proptoUpdate = obj.propToUpdate;
    const update = obj.update;
    switch(obj.type) {
        case 'map':
            return arr.map((i) => {
                if (comparisonOp(i[keyInArr], obj.item[keyInItem])) {
                    return i = { 
                        ...i,
                        [proptoUpdate]: update
                    }
                }
                return i;
            })
    }
}

const equality = (a, b) => a === b;