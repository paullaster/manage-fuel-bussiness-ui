import { v4 as uuidv4 } from 'uuid';
import { MdTrolley, MdCurrencyExchange , MdOutlineBusinessCenter, MdHeatPump   } from "react-icons/md";

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
            to: 'purchases/fuel',
            icon: <MdHeatPump   size={20} />,
            caption: "fuel",
            disabled: false,
            order: 2,
            hasSublinks: false,
            showSubs: false,
        },
        {
            id: uuidv4(),
            to: 'purchases/item',
            icon: <MdCurrencyExchange   size={20} />,
            caption: "item",
            disabled: false,
            order: 2,
            hasSublinks: false,
            showSubs: false,
        },
        {
            id: uuidv4(),
            to: 'purchases/vendor',
            icon: <MdOutlineBusinessCenter  size={20} />,
            caption: "vendor",
            disabled: false,
            order: 2,
            hasSublinks: false,
            showSubs: false,
        },
    ]
}