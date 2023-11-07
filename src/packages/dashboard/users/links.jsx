import { v4 as uuidv4 } from 'uuid';
import { MdOutlineHouse } from 'react-icons/md';

export const links = [
    {
        id: uuidv4(),
        icon: <MdOutlineHouse size={30} />,
        caption: "Company",
        disabled: false,
        order: 1,
        hasSublinks: false
    }
];