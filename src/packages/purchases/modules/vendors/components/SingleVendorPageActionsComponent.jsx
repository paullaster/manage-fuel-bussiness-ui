import React from 'react'
import SectionIntroduction from '../../../shared/components/SectionIntroduction'
import VendorActionListComponent from './VendorActionListComponent'

const SingleVendorPageActionsComponent = ({vendorName}) => {
    return (
        <div className="actions">
            <div>
                <SectionIntroduction text={`${vendorName}`}/>
            </div>
            <VendorActionListComponent />
        </div>
    )
}

export default SingleVendorPageActionsComponent