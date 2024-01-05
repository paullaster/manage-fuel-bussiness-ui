import { InputComponent } from "@/components";
const SaleItem = () => {
  return (
    <div className='saleItems'>
      <InputComponent
        prelabelText="Dip Quantity Before offloading"
        name="dip_quantity_before_offloading"
      />
      <InputComponent
        prelabelText="expected Quantity"
        name="expected_quantity"
      />
        <InputComponent
          prelabelText="Actual dip Quantity after offloading"
        name="tactual_dip_quantity_after_offloading"
        />
      <InputComponent
        prelabelText="sales Qunatity"
        name="sales_quantity_during_offloading"
      />
    </div>
  )
}

export default SaleItem