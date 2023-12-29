export const NewConstruct = ({ options,
    style = {
        display: "flex",
        justifyContent: "space-between",
        padding: '2.0rem 0',
        borderBottom: ".1rem solid #5f6c921e",
    }
}) => {
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