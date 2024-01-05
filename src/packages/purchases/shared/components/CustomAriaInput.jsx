import { Input, Button } from "react-aria-components";
import { MdArrowDropDown, MdOutlineSearch } from "react-icons/md";

const CustomAriaInput = () => {
    return (
        <div className="customAriaComponent">
            <span><MdOutlineSearch size={20} /></span>
            <Input />
            <Button> <MdArrowDropDown /> </Button>
        </div>
    )
}

export default CustomAriaInput