import { MdAdd } from "react-icons/md";
import { Button, } from "@/components";

const AddItemButton = ({methodHandler = () =>console.log("create new item"), btnCaption = "caption"}) => {
    return (
        <div className="button_container">
            <Button onClick={methodHandler}>
                <span><MdAdd size={20} /></span>
                <span>{btnCaption}</span>
            </Button>
        </div>
    )
}

export default AddItemButton