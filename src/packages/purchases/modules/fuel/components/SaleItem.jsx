import { InputComponent } from "@/components";
import Autocomplete from "../../../shared/components/Autocomplete";
const SaleItem = () => {

  const list = [];

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
        prelabelText="Variance"
        name="variance"
      />
      <InputComponent
        prelabelText="sales quantity during offloading"
        name="sales_quantity_during_offloading"
      />
      <Autocomplete list={list} label={'tanks'} />
    </div>
  )
}

export default SaleItem