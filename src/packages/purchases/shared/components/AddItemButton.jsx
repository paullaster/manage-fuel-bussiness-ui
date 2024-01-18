import { MdAdd } from "react-icons/md";
import { Button, } from "@/components";

const AddItemButton = ({ methodHandler = () => console.log("create new item"), btnCaption = "caption" }) => {
    return (
        <div className="button_container">
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                Add record
            </Button>
        </div>
    )
}

export default AddItemButton