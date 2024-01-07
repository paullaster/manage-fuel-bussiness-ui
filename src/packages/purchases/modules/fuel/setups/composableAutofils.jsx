import { v4 as uuidv4 } from 'uuid';
import { MdPersonAdd, MdManageAccounts } from "react-icons/md";

export default [
    {
        card: uuidv4(),
        name: "Vendor",
        CustomCardLabelIcon: <MdPersonAdd size={20} />,
        cardView: true,
        addItemView: false,
    },
    {
        card: uuidv4(),
        name: "Officer",
        CustomCardLabelIcon: <MdManageAccounts size={20} />,
        cardView: true,
        addItemView: false,
    }
];