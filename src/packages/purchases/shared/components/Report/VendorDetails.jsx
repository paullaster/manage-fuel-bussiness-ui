import React from 'react'
import { usePurchasesState } from '../../../Context'

const VendorDetails = () => {

    const { vendor } = usePurchasesState();
    const location = `${ vendor?.city }, ${vendor?.zip_code }, ${vendor?.state}, ${vendor?.country}`;

  return (
    <div>
        <p>{vendor?.vendor_name || 'Vednro name'}</p>
        <p>{vendor?.addresses?.address || 'P.O. Box 2714 - 00100, Nairobi, Kenya'}</p>
        <p> {location || 'Nairobi, 00100, Nairobi, Kenya'}</p>
        <p></p>
        <p></p>
        <p></p>
    </div>
  )
}

export default VendorDetails