import { ComboBox, Label } from "react-aria-components";
import CustomPopover from "./CustomPopover";
import CustomAriaInput from "./CustomAriaInput";

const label = " ";
const Autocomplete = ({list}) => {
  return (
      <div className={'autocomplete'}>
          <ComboBox >
              <Label>{label}</Label>
              <CustomAriaInput />
              <CustomPopover items={list} />
          </ComboBox>
    </div>
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