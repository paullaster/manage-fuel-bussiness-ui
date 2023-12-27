export const NewConstruct = ({ options }) => {
    return (
        <div style={{justifyContent: "space-between", paddingBottom: '1.2rem'}}>
            {
                options.map((item, index) => (
                    <input type={item.type} key={index} placeholder={item.prop} />
                ))
            }
        </div>
    )
};