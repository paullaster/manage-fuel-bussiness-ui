import CustomCardLabel from "./CustomCardLabel";
import Autocomplete from "./Autocomplete";
import AddItemButton from "./AddItemButton";

const list = [
    {
        id: 1,
        name: "vendor 1"
    },
    {
        id: 2,
        name: "vendor 2"
    }
];

const AddItem = ({ label, cardLabelIcon, cardView, addItemView }) => {
    return (
        <div className="addItem">
            <label htmlFor={label} className="label-required">{label}</label>
            {
                cardView ? <CustomCardLabel label={`add ${label}`} icon={cardLabelIcon} /> : ''
            }
             {
                addItemView ? 
                <div>
                    <Autocomplete list={list} />
                    <AddItemButton btnCaption={`new ${label}`} />
                </div>
                : ''
             }
        </div>
    )
}

export default AddItem