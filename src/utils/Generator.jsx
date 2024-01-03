 /**
  * 
  * @param {*} arr 
  */
 
 export const generator = function*(arr) {
    if (!arr || arr.length < 1 ) throw new Error("Invalid");
    const length = arr.length;
    let count = 0
    while (count < length) {
        yield arr[count];
        count++;
    };
};