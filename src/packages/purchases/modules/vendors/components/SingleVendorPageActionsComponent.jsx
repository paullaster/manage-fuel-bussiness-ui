import React from 'react'
import SectionIntroduction from '../../../shared/components/SectionIntroduction'
import VendorActionListComponent from './VendorActionListComponent'

const SingleVendorPageActionsComponent = ({ vendorName }) => {
    return (
        <div className="actions">
            <SectionIntroduction text={`${vendorName}`} />
            <VendorActionListComponent />
        </div>
    )
}

export default SingleVendorPageActionsComponent