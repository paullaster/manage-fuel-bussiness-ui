import { MdDelete } from "react-icons/md";
import { Button } from "@/components";

const FormAction = ({ item, onDelete }) => {
    console.log(item)
    return (
        <Button onClick ={(event) => onDelete(event, item)}>
            <MdDelete size={25} />
        </Button>
    )
}

export default FormAction