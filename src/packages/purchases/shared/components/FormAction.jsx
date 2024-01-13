import { MdDelete } from "react-icons/md";
import { Button } from "@/components";

const FormAction = ({ item, onDelete }) => {
    return (
        <Button onClick ={onDelete}>
            <MdDelete size={25} />
        </Button>
    )
}

export default FormAction