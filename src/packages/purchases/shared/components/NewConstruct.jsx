export const NewConstruct = ({ options, style = { display:"flex", justifyContent: "space-between", paddingBottom: '1.2rem'} }) => {
    return (
        <div style={style} className="newConstruct">
            {
                options.map((item, index) => (
                    <input type={item.type} key={index} placeholder={item.placeholder} />
                ))
            }
        </div>
    )
};