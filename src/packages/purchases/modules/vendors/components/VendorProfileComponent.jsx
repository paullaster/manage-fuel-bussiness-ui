import React from 'react'

const VendorProfileComponent = ({vendor}) => {
  return (
    <div>
        <VendorAddress address={vendor.addresses}/>
    </div>
  )
}

export default VendorProfileComponent


const VendorAddress = ({address}) => {

}