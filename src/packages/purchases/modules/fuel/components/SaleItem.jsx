import React from 'react'

const SaleItem = () => {
  return (
    <div>
      <InputComponent
        prelabelText="Dip Qnty Before offloading"
        name="transport_name"
      />
      <InputComponent
        prelabelText="texpected Qnty"
        name="transport_name"
      />
        <InputComponent
          prelabelText="Actual dip Qnty after offloading"
          name="transport_name"
        />
      <InputComponent
        prelabelText="sales Qnty"
        name="transport_name"
      />
    </div>
  )
}

export default SaleItem