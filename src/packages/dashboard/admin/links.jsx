
import { MdOutlineHouse } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export const links =
    {
        id: uuidv4(),
        to: '/dashboard/admin/:id/company/list',
        icon: <MdOutlineHouse size={30} />,
        caption: "company",
        disabled: false,
        order: 1,
        hasSublinks: false,
        showSubs: false,
    };