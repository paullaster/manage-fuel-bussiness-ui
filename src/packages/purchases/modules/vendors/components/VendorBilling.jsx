import React, { useState } from 'react'
import { AutocompleteComponent } from '@/components';

const VendorBilling = ({ }) => {
    const [paymentMethods, setPaymentMethods] = useState([{method: 'MPESA'}]);
    return (
        <div className="new_vendors__left__dataentry__form_billinginfo_dataentry">
            <div className="new_vendors__left__dataentry__form_billinginfo_dataentry_section-one">
            <AutocompleteComponent 
            list={paymentMethods}
            label={'Payment methods'}
            keyField={'method'}
            />
                <InputComponent
                    type="text"
                    prelabelText={"currency"}
                    name="currency"
                />
            </div>

        </div>
    )
}

export default VendorBilling