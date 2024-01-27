import React from 'react'
import SectionIntroduction from '../../../shared/components/SectionIntroduction'

const SingleVendorPageActionsComponent = ({vendor_name}) => {
    return (
        <div className="actions">
            <div>
                <SectionIntroduction text={`${vendor_name}`}/>
            </div>
            <div></div>
        </div>
    )
}

export default SingleVendorPageActionsComponent