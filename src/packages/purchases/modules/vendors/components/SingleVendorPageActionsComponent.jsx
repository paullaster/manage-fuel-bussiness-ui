import React from 'react'
import SectionIntroduction from '../../../../../components/shared/SectionIntroduction'
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