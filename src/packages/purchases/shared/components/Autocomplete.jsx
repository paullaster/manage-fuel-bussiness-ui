import { ComboBox } from "react-aria-components";
import CustomPopover from "./CustomPopover";

const Autocomplete = ({list}) => {
  return (
    <ComboBox>
        <CustomPopover items={ list }/>
    </ComboBox>
  )
}

export default Autocomplete


    // < div className = "add_new_item_card" >
    //           <div className="add_new_item_card__search">
    //               <span><MdOutlineSearch size={20} /></span>
    //               <input type="search" name="vendor" id="vendor" />
    //           </div>
    //           <div>
    //           </div>
    //           <Button>
    //               <span><MdAdd size={20} /></span>
    //               <span>new vendor</span>
    //           </Button>
    //       </div >