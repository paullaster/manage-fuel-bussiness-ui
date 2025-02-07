import { InputComponent } from "@/components";
import { useGlobalState } from "@/store";
import { forwardRef } from "react";
import { YearMonthDate } from "@/utils";
const InvoiceDetails = forwardRef((props, ref) => {
    const { transactionCode } = useGlobalState();

    return (
        <div className="billingInfo">
            <InputComponent
                prelabelText="Bill number"
                name="Bill_number"
                disabled={true}
                readOnly
                value={transactionCode}
                ref={ref.billNumberRef}
            />
            <InputComponent
                prelabelText="Invoice number"
                name="invoice_number"
                ref={ref.invoiceNumberRef}
            />
            <InputComponent
                prelabelText="Purchase order number"
                name="po_number"
                ref={ref.purchaseOrderNumberRef}
            />
            <InputComponent
                prelabelText="Delivery note number"
                name="delivery_note_number"
                ref={ref.deliveryNoteNumberRef}
            />
            <InputComponent
                prelabelText="Bill date"
                value={YearMonthDate(new Date())}
                ref={ref.billDate}
                readOnly
                disabled
            />
        </div>
    )
})

export default InvoiceDetails