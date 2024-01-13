import React from 'react'

const GetGross = () => {
  return (
    (Number(params.row.quantity)  || 0) * (Number(params.row.price) || 0)) + ((Number(params.row.vat_rate || 0) / 100) * (Number(params.row.quantity)  || 0) * (Number(params.row.price) || 0)
  )
}

export default GetGross