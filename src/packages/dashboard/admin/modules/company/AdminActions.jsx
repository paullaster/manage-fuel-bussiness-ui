import { MdOutlineMoreHoriz, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

export default
   [
      {
         key: uuidv4(),
         caption: 'New',
         iconList: [{ key: uuidv4(), icon: <MdOutlineMoreHoriz /> }, { key: uuidv4(), icon: <MdOutlineKeyboardArrowDown /> }],
         hasList: true,
         list: [
            { key: uuidv4(), cap: 'User', action: () => { console.log("Fuel purchase") } },
            { key: uuidv4(), cap: 'Company', action: () => { console.log("Item purchase") } },
         ]
      },
   ];