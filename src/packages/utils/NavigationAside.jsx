import { FaRegCircleUser, FaRegBell } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';

export const menus = [
    {
        id: uuidv4(),
        icon: <FaRegCircleUser size={20}/>,
        caption: 'Profile',
        path: 'profile',
    },
    {
        id: uuidv4(),
        icon: <FaRegBell size={20}/>,
        caption: 'Notifications',
        path: 'notifications',
    }
];