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
            { key: uuidv4(), cap: 'Fuel purchase', action: () => { console.log("Fuel purchase") } },
            { key: uuidv4(), cap: 'Item purchase', action: () => { console.log("Item purchase") } },
         ]
      },
      {
         key: uuidv4(),
         caption: 'Receipts',
         iconList: [],
         hasList: false,
         action: () => { console.log("receipts ") },
      },
      {
         key: uuidv4(),
         caption: 'Debit Notes',
         iconList: [],
         hasList: false,
         action: () => { console.log("Debit Notes ") },
      },
      {
         key: uuidv4(),
         caption: '',
         iconList: [{ key: uuidv4(), icon: <MdOutlineMoreHoriz /> }],
         hasList: true,
         list: [
            { cap: 'Import', action: () => { console.log("Duplicate ") } },
            { cap: 'Export', action: () => { console.log("Delete") } },
         ]
      },
   ];