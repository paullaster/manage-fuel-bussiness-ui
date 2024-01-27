import React from 'react'
import SectionIntroduction from '../../../shared/components/SectionIntroduction'

const SingleVendorPageActionsComponent = ({vendorName}) => {
    return (
        <div className="actions">
            <div>
                <SectionIntroduction text={`${vendorName}`}/>
            </div>
            <div></div>
        </div>
    )
}

export default SingleVendorPageActionsComponent