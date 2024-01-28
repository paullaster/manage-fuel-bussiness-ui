import React, { useEffect } from 'react'

const VendorProfileComponent = ({ vendor }) => {
    useEffect(() => { }, [vendor]);
    return (
        <div>
            <VendorAddress address={vendor?.addresses[0]} />
            <VendorContactPerson contact={vendor?.contacts} />
            <VendorBillingInformationComponent billing={vendor?.billing[0]} />
        </div>
    )
}

export default VendorProfileComponent


const VendorAddress = ({ address }) => {
    useEffect(() => { }, [address])
    return (
        <div>
            <h4>
                Address
            </h4>
            <address>
                <span>
                    {address?.address}
                </span>
                <span>
                    {address?.city}, {address?.state}, {address?.zip_code}, {address?.country}
                </span>
            </address>
        </div>
    )
}

const VendorContactPerson = ({ contact }) => {
    useEffect(() => { }, [contact])
    return (
        <div>
            <h4>Contacts</h4>
            {
                contact?.map((c) => {
                    return (
                        <div key={c.contact_id}>
                            <p>{c.contact_name}</p>
                            <p>{c.contact_email}</p>
                            <p>{c.contact_phone_number}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const VendorBillingInformationComponent = ({ billing }) => {
    useEffect(() => {}, [billing]);
    return (
        <div>
            <h4>Billing</h4>
           { billing?.payment_method ? <p>Payment Method:  {billing?.payment_method}</p> : ''}
           { billing?.payment_method ? <p>Payment Method:  {billing?.payment_method}</p> : ''}
           { billing?.payment_method ? <p>Payment Method:  {billing?.payment_method}</p> : ''}
        </div>
    )
}