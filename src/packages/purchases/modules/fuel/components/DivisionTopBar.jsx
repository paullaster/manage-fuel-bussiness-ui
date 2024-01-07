const DivisionTopBar = ({sectionTitle = 'Section title', children, style = {}}) => {
    return (
        <div className='divisionTopBar' style={style}>
            <h2>{sectionTitle}</h2>
            {children}
        </div>
    )
}

export default DivisionTopBar