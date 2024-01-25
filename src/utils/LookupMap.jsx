const LookUpMap = (array, keyField) => {
    const LookUp = array.reduce((map, option) => {
        map[option[keyField]] = option;
        return map;
      });
      return LookUp;
}