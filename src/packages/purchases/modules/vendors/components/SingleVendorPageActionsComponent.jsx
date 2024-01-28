import React from 'react'
import SectionIntroduction from '../../../shared/components/SectionIntroduction'
import VendorActionListComponent from './VendorActionListComponent'

const SingleVendorPageActionsComponent = ({ vendorName }) => {
    return (
        <div className="vendorActions">
            <SectionIntroduction text={` ${vendorName || 'Vendor Name'}`} />
            <VendorActionListComponent />
        </div>
    )
}

export default SingleVendorPageActionsComponent