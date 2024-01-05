import { v4 as uuidv4 } from 'uuid';
import { MdPersonAdd, MdAddShoppingCart, MdFactCheck, MdManageAccounts } from "react-icons/md";

export default [
    {
        card: uuidv4(),
        name: "vendor",
        CustomCardLabelIcon: <MdPersonAdd size={20} />,
        cardView: true,
        addItemView: false,
    },
    {
        card: uuidv4(),
        name: "product",
        CustomCardLabelIcon: <MdAddShoppingCart size={20} />,
        cardView: true,
        addItemView: false,
    },
    {
        card: uuidv4(),
        name: "invoice",
        CustomCardLabelIcon: <MdFactCheck size={20} />,
        cardView: true,
        addItemView: false,
    },
    {
        card: uuidv4(),
        name: "officer",
        CustomCardLabelIcon: <MdManageAccounts size={20} />,
        cardView: true,
        addItemView: false,
    }
];