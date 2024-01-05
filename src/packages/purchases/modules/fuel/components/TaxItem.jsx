import { InputComponent } from "@/components";

const TaxItem = () => {
    return (
        <div className='saleItems'>
            <InputComponent
                prelabelText="quantity"
                name="quantity"
            />
            <InputComponent
                prelabelText="price"
                name="price"
            />
            <InputComponent
                prelabelText="gross amount"
                name="gross_amount"
            />
            <InputComponent
                prelabelText="tax rate"
                name="tax_rate"
            />
            <InputComponent
                prelabelText="tax amount"
                name="tax_amount"
            />
            <InputComponent
                prelabelText="net payable"
                name="net_payable"
            />
        </div>
    )
}

export default TaxItem