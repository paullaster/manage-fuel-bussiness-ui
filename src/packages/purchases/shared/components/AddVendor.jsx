import { MdOutlineSearch, MdAdd, MdPersonAdd } from "react-icons/md";
import { Button } from "@/components";

const AddVendor = () => {
  return (
      <div className="addVendor">
          <label htmlFor="vendor" className="label-required">Vendor</label>
          <div className="add_item_placeholder">
              <span>
                  <MdPersonAdd size={20} />
              </span>
              <span>
                  Add vendor
              </span>
          </div>
      </div>
  )
}

export default AddVendor