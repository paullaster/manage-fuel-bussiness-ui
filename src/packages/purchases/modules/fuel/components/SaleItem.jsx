import { InputComponent } from "@/components";
const SaleItem = () => {
  return (
    <div className='saleItems'>
      <InputComponent
        prelabelText="Dip Qnty Before offloading"
        name="dip_quantity_before_offloading"
      />
      <InputComponent
        prelabelText="texpected Qnty"
        name="expected_quantity"
      />
        <InputComponent
          prelabelText="Actual dip Qnty after offloading"
        name="tactual_dip_quantity_after_offloading"
        />
      <InputComponent
        prelabelText="sales Qnty"
        name="sales_quantity_during_offloading"
      />
    </div>
  )
}

export default SaleItem