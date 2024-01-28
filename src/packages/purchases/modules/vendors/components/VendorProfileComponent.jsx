import React from 'react'

const VendorProfileComponent = ({ vendor }) => {
    return (
        <div>
            <VendorAddress address={vendor?.addresses} />
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
                <span>
                    {vendor?.address}
                </span>
                <span>
                    {vendor?.city}, {vendor?.state}, {vendor?.zip_code}, {vendor?.country}
                </span>
            </address>
        </div>
 )
}