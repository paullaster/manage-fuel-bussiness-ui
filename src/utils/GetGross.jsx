const GetGross = (item) => {
    console.log(item);
    const vatRate = item.vat_rate.split(',').toSpliced()
    const amount = (Number(item.quantity)  || 0) * (Number(item.price) || 0);
    const tax_amount = (Number(item.vat_rate || 0) / 100) * (Number(item.quantity) || 0);
  return amount + tax_amount;
}

export default GetGross