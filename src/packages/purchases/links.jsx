import { v4 as uuidv4 } from 'uuid';
import { MdTrolley, MdOutlineBusinessCenter  } from "react-icons/md";

export default {
    id: uuidv4(),
    to: 'purchases',
    icon: <MdTrolley size={30} />,
    caption: "purchases",
    disabled: false,
    order: 1,
    hasSublinks: true,
    showSubs: false,
    sublinks: [
        {
            id: uuidv4(),
            to: 'purchases/vendor',
            icon: <MdOutlineBusinessCenter  size={20} />,
            caption: "vendor",
            disabled: false,
            order: 2,
            hasSublinks: false,
            showSubs: false,
        }
    ]
}