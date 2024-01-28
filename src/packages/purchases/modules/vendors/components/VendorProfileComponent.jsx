import React from 'react'

const VendorProfileComponent = ({vendor}) => {
  return (
    <div>
        {vendor.map((prop) => {
            console.log(prop)
            if (prop === 'addresses'){
                return (
                    <VendorAddress key={prop.address_id} address={prop.}/>
                )
            }
        })}
    </div>
  )
}

export default VendorProfileComponent


const VendorAddress = ({address}) => {

}