import { MdDelete } from "react-icons/md";
import { Button } from "@/components";

const FormAction = ({ item }) => {
    return (
        <Button>
            <MdDelete size={25} />
        </Button>
    )
}

export default FormAction