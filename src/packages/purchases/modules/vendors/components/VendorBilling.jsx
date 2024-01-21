import React, { useState } from 'react'
import { AutocompleteComponent, InputComponent } from '@/components';

const VendorBilling = () => {
    const [paymentMethods, setPaymentMethods] = useState([{ method: 'MPESA' }]);
    return (
        <div className="billinginfo_dataentry">
            <AutocompleteComponent
                list={paymentMethods}
                label={'Payment methods'}
                keyField={'method'}
            />
            <InputComponent
                type="text"
                prelabelText={"Phone"}
                name="mpesa_phone_number"
                title="Mpesa phone number"
            />
            <InputComponent
                type="text"
                prelabelText={"Mpesa Till number"}
                name="mpesa_till_number"
            />
            <InputComponent
                type="text"
                prelabelText={"Mpesa Paybill number"}
                name="mpesa_paybill_number"
            />
            <InputComponent
                type="text"
                prelabelText={"Bank name"}
                name="bank_name"
            />
            <InputComponent
                type="text"
                prelabelText={"Account number"}
                name="bank_account_number"
            />
        </div>
    )
}

export default VendorBilling