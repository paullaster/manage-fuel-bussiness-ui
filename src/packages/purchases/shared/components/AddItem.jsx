import CustomCardLabel from "./CustomCardLabel";
import Autocomplete from "./Autocomplete";

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
      </div>
  )
}

export default AddItem