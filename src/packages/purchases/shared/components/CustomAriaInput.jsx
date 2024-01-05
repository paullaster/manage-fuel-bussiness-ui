import { Input, Button } from "react-aria-components";
import { MdArrowDropDown } from "react-icons/md";

const CustomAriaInput = () => {
    return (
        <div className="customAriaComponent">
            
            <Input />
            <Button> <MdArrowDropDown /> </Button>
        </div>
    )
}

export default CustomAriaInput