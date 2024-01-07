import React from 'react'

const DivisionTopBar = ({sectionTitle = 'Section title', children, style = {}}) => {
    return (
        <div className='divisionTopBar' style={style}>
            <div>{sectionTitle}</div>
            {children}
        </div>
    )
}

export default DivisionTopBar