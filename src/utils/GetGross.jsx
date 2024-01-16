const GetGross = (item, taxField, quantityField, priceField ) => {
    let vatRate = item[taxField].split('');
    vatRate = vatRate.toSpliced(vatRate.indexOf('%'), 1).join('');
    const amount = (Number(item[quantityField])  || 0) * (Number(item[priceField]) || 0);
    const tax_amount = ((Number(vatRate || 0) / 100) * (Number(item[priceField]) || 0)) * (Number(item[quantityField])  || 0);
    
  return amount + tax_amount || 0 ;
}

export default GetGross