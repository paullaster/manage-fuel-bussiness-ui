import { InputComponent } from "@/components";

const InvoiceDetails = () => {
    return (
        <div className="billingInfo">
            <InputComponent
                prelabelText="Purchase entry"
                name="purchase_entry_code"
                disabled={true}
                value='CODEHERE'
            />
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
        </div>
    )
}

export default InvoiceDetails