import { InputComponent, DatePicker } from "@/components";

const InvoiceDetails = () => {
    return (
        <div>
            <InputComponent
                prelabelText="Invoice number"
                name="invoice_number"
            />
            <DatePicker />
            <InputComponent
                prelabelText="Purchase order number"
                name="purchase_order_number"
            />
        </div>
    )
}

export default InvoiceDetails