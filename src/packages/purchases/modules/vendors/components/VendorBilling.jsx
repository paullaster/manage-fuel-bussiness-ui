import React, { useState } from 'react'
import { AutocompleteComponent, InputComponent } from '@/components';

const VendorBilling = ({refs}) => {
    const [paymentMethods, setPaymentMethods] = useState([{ method: 'MPESA' }]);
    return (
        <div className="billinginfo_dataentry">
            <AutocompleteComponent
                list={paymentMethods}
                label={'Payment methods'}
                keyField={'method'}
                ref={refs.paymentMethodRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Phone"}
                name="mpesa_phone_number"
                title="Mpesa phone number"
                ref={refs.phoneNumberRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Mpesa Till number"}
                name="mpesa_till_number"
                ref={refs.tillNumberRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Mpesa Paybill number"}
                name="mpesa_paybill_number"
                ref={refs.paybillNumberRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Bank name"}
                name="bank_name"
                ref={refs.bankNameRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Account number"}
                name="bank_account_number"
                ref={refs.accountNumberRef}
            />
        </div>
    )
}

export default VendorBilling