import React from 'react'

const InvoiceDetails = () => {
    return (
        <div>
            <InputComponent
                prelabelText="Invoice number"
                name="invoice_number"
            />
            <InputComponent
                prelabelText="Purchase order number"
                name="purchase_order_number"
            />
        </div>
    )
}

export default InvoiceDetails