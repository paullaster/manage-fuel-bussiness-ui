import { InputComponent, DatePickerComponent } from "@/components";

const InvoiceDetails = () => {
    return (
        <div>
            <InputComponent
                prelabelText="Invoice number"
                name="invoice_number"
            />
            <DatePickerComponent />
            <InputComponent
                prelabelText="Purchase order number"
                name="purchase_order_number"
            />
            <DatePickerComponent />
        </div>
    )
}

export default InvoiceDetails