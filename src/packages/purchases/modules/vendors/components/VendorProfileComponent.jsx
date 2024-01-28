import React from 'react'

const VendorProfileComponent = ({ vendor }) => {
    return (
        <div>
            <VendorAddress address={vendor.addresses} />
        </div>
    )
}

export default VendorProfileComponent


const VendorAddress = ({ address }) => {


    return (
        <div>
            <h4>
                Address
            </h4>
            <address>
            
            </address>
        </div>
 )
}