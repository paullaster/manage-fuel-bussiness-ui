import React, { forwardRef, useState } from 'react'
import { AutocompleteComponent, InputComponent } from '@/components';

const VendorBilling = forwardRef((props, ref)=>{
    // const { refs } = props;
    const [paymentMethods, setPaymentMethods] = useState([{ method: 'MPESA' }]);
    return (
        <div className="billinginfo_dataentry">
            <AutocompleteComponent
                list={paymentMethods}
                label={'Payment methods'}
                keyField={'method'}
                ref={ref.paymentMethodRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Phone"}
                name="mpesa_phone_number"
                title="Mpesa phone number"
                ref={ref.phoneNumberRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Mpesa Till number"}
                name="mpesa_till_number"
                ref={ref.tillNumberRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Mpesa Paybill number"}
                name="mpesa_paybill_number"
                ref={ref.paybillNumberRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Bank name"}
                name="bank_name"
                ref={ref.bankNameRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Account number"}
                name="bank_account_number"
                ref={ref.accountNumberRef}
            />
        </div>
    )
})

export default VendorBilling