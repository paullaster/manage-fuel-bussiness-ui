
import { MdSettingsSuggest, MdOutlineHouse, MdOutlinePeopleAlt } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export const links =
    {
        id: uuidv4(),
        to: '',
        icon: <MdSettingsSuggest size={30} />,
        caption: "Manage",
        disabled: false,
        order: 1,
        hasSublinks: true,
        showSubs: false,
        sublinks: [
            {
                id: uuidv4(),
                to: '/dashboard/admin/:id/manage/users/list',
                icon: <MdOutlinePeopleAlt   size={20} />,
                caption: "Users",
                disabled: false,
                order: 2,
                hasSublinks: false,
                showSubs: false,
            },
            {
                id: uuidv4(),
                to: '/dashboard/admin/:id/manage/company/list',
                icon: <MdOutlineHouse   size={20} />,
                caption: "Company",
                disabled: false,
                order: 2,
                hasSublinks: false,
                showSubs: false,
            },
        ]
    };