import React, { useEffect } from 'react'

const VendorProfileComponent = ({ vendor }) => {
    useEffect(() => { }, [vendor]);
    return (
        <div className='vendorProfile'>
            <VendorAddress address={vendor?.addresses[0]} />
            <VendorContactPerson contact={vendor?.contacts} />
            <VendorBillingInformationComponent billing={vendor?.billing[0]} />
            <SingleVendorItemDisplay title={'Tax Number'} value={vendor?.kra_pin}/>
            <SingleVendorItemDisplay title={'Website'} value={vendor?.website}/>
            <SingleVendorItemDisplay title={'Reference'} value={vendor?.vendor_reference}/>
        </div>
    )
}

export default VendorProfileComponent


const VendorAddress = ({ address }) => {
    useEffect(() => { }, [address])
    return (
        <div className='address'>
            <h4>
                Address
            </h4>
            <address className='fontSize'>
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
                        <div key={c.contact_id} className='fontSize'>
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
           { billing?.payment_method ? <p className='fontSize'><span>Method: </span> <span>{billing?.payment_method}</span></p> : ''}
           { billing?.mpesa_phone_number ? <p className='fontSize'><span>Number: </span> <span>{billing?.mpesa_phone_number}</span></p> : ''}
           { billing?.mpesa_till_number ? <p className='fontSize'><span>Till: </span> <span>{billing?.mpesa_till_number}</span></p> : ''}
           { billing?.mpesa_paybill_number ? <p className='fontSize'><span>PayBill: </span>  <span>{billing?.mpesa_paybill_number}</span></p> : ''}
           { billing?.bank_name ? <p className='fontSize'><span>Bank Name: </span>  <span>{billing?.bank_name}</span></p> : ''}
           { billing?.bank_account_number ? <p className='fontSize'><span>Account Number:  </span><span>{billing?.bank_account_number}</span></p> : ''}
        </div>
    )
}

const SingleVendorItemDisplay = ({title, value}) => {
    useEffect(() =>{}, [value]);
    return (
        <div>
            <h4>{title}</h4>
            <p className='fontSize'>{value}</p>
        </div>
    )
}