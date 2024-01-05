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

const AddVendor = () => {
  return (
      <div className="addVendor">
          <label htmlFor="vendor" className="label-required">Vendor</label>
          <CustomCardLabel label={"add vendor"}/>
          <Autocomplete list={list}/>
      </div>
  )
}

export default AddVendor