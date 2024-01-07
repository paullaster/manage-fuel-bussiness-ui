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
            <InputComponent
                prelabelText="Delivery note number"
                name="delivery_note_number"
            />
            <DatePickerComponent label="Delivery note date"/>
        </div>
    )
}

export default InvoiceDetails