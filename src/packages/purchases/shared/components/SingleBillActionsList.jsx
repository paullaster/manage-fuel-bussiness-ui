import { MdOutlineMoreHoriz, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

export default
   [
      {
         key: uuidv4(),
         caption: 'New',
         iconList: [{ key: uuidv4(), icon: <MdOutlineMoreHoriz /> }, { key: uuidv4(), icon: <MdOutlineKeyboardArrowDown /> }],
         action: () => { console.log("Bill") },
      },
      {
         key: uuidv4(),
         caption: '',
         iconList: [{ key: uuidv4(), icon: <MdOutlineMoreHoriz /> }],
         hasList: true,
         list: [
            { cap: 'Duplicate', action: () => { console.log("Duplicate ") } },
            { cap: 'Print', action: () => { console.log("Delete") } },
            { cap: 'Download PDF', action: () => { console.log("Delete") } },
            { cap: 'Cancel', action: () => { console.log("Delete") } },
            { cap: 'Delete', action: () => { console.log("Delete") } },
         ]
      },
   ];