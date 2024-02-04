import { InputComponent, DatePickerComponent } from "@/components";
import { useGlobalState } from "@/store";
import { forwardRef } from "react";

const InvoiceDetails = forwardRef((props, ref) => {
    const { transactionCode } = useGlobalState();
    const { setValue } = props;

    return (
        <div className="billingInfo">
            <InputComponent
                prelabelText="Bill number"
                name="Bill_number"
                disabled={true}
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
            <DatePickerComponent
                    label='Purchase date'
                    setValue={setValue}
                />
        </div>
    )
})

export default InvoiceDetails