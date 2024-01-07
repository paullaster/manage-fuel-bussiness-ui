import { InputComponent, DatePickerComponent } from "@/components";

const InvoiceDetails = () => {
    return (
        <div className="billingInfo">
            <InputComponent
                prelabelText="Invoice number"
                name="invoice_number"
            />
            <InputComponent
                prelabelText="Purchase order number"
                name="po_number"
            />
            <InputComponent
                prelabelText="Delivery note number"
                name="delivery_note_number"
            />
            <DatePickerComponent label="Invoice date"/>
            <DatePickerComponent label="Purchase order date"/>
            <DatePickerComponent label="Delivery note date"/>
        </div>
    )
}

export default InvoiceDetails