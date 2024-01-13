const GetGross = (item) => {
  return (
    (Number(item.quantity)  || 0) * (Number(item.price) || 0)) + ((Number(item.vat_rate || 0) / 100) * (Number(item.quantity)  || 0) * (Number(item.price) || 0)
  )
}

export default GetGross