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
]

const AddItem = ({label}) => {
  return (
      <div className="addItem">
          <label htmlFor="vendor" className="label-required">{label}</label>
          <CustomCardLabel label={"add vendor"}/>
          <Autocomplete list={list}/>
          <AddItemButton btnCaption="new vendor"/>
      </div>
  )
}

export default AddItem