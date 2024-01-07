import { InputComponent, DatePickerComponent } from "@/components";

const InvoiceDetails = () => {
    return (
        <div>
            <InputComponent
                prelabelText="Invoice number"
                name="invoice_number"
            />
            <DatePickerComponent label="Invoice date"/>
            <InputComponent
                prelabelText="Purchase order number"
                name="po_number"
            />
            <DatePickerComponent label="Purchase order date"/>
        </div>
    )
}

export default InvoiceDetails