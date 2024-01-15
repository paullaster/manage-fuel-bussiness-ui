import { InputComponent } from "@/components";
import { useGlobalState } from "@/store";

const InvoiceDetails = () => {
    const { transactionCode } = useGlobalState();

    return (
        <div className="billingInfo">
            <InputComponent
                prelabelText="Purchase entry"
                name="purchase_entry_code"
                disabled={true}
                value={transactionCode}
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