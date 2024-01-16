const GetGross = (item, field) => {
    let vatRate = item[field].split('');
    vatRate = vatRate.toSpliced(vatRate.indexOf('%'), 1).join('');
    const amount = (Number(item.quantity)  || 0) * (Number(item.price) || 0);
    const tax_amount = ((Number(vatRate || 0) / 100) * (Number(item.price) || 0)) * (Number(item.quantity)  || 0);
    
  return amount + tax_amount || 0 ;
}

export default GetGross