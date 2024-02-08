import React from 'react'
import { usePurchasesState } from '../../../Context'

const VendorDetails = () => {

    const { vendor } = usePurchasesState();
    const location = `${vendor?.addresses[0]?.city }, ${vendor?.addresses[0]?.zip_code }, ${vendor?.addresses[0]?.state}, ${vendor?.addresses[0]?.country}`;

  return (
    <div>
        <p>{vendor?.vendor_name || 'Vednro name'}</p>
        <p>{vendor?.addresses?.address || 'P.O. Box 2714 - 00100, Nairobi, Kenya'}</p>
        <p> {location || 'Nairobi, 00100, Nairobi, Kenya'}</p>
        <p><span>Tax Number:</span> <span>{vendor?.kra_pin || 'A456787655U'}</span></p>
        <p>{vendor?.vendor_phone || '+254700258098'}</p>
        <p>{vendor?.vendor_email || 'email@mail.com'}</p>
    </div>
  )
}

export default VendorDetails