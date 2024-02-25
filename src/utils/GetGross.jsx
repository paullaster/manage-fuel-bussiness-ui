const GetGross = (item, taxField, quantityField, priceField, type) => {
  
  let vatRate = item[taxField]
  const tax_amount = ((Number(vatRate || 0) / 100) * (Number(item[priceField]) || 0)) * (Number(item[quantityField]) || 0);
  let amount = 0;
  switch (type) {
    case 'tax_amount':
      return tax_amount;
    case 'gross_amount':
      amount = (Number(item[quantityField]) || 0) * (Number(item[priceField]) || 0);
      return amount + tax_amount || 0;
    // default: return new Error('Undefined type');
  }
}

export default GetGross