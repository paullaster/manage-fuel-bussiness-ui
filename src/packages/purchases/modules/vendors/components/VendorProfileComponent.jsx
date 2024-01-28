import React, { useEffect } from 'react'

const VendorProfileComponent = ({ vendor }) => {
    useEffect(() =>{}, [vendor])
    console.log("vendor", vendor)
    return (
        <div>
            <VendorAddress address={vendor?.addresses} />
        </div>
    )
}

export default VendorProfileComponent


const VendorAddress = ({ address }) => {
    useEffect(() => {}, [address])
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