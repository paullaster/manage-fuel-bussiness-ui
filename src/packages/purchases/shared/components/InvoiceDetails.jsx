import { InputComponent } from "@/components";
import { useGlobalState } from "@/store";

const InvoiceDetails = () => {
    const { transactionCode } = useGlobalState();

    return (
        <div className="billingInfo">
            <InputComponent
                prelabelText="Bill number"
                name="Bill_number"
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