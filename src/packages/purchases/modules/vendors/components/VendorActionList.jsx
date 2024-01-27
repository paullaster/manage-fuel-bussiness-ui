import { MdOutlineMoreHoriz, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

export default 
[
 {
    caption: 'New',
    iconList: [{key: uuidv4(), icon: <MdOutlineMoreHoriz />}, {key: uuidv4(), icon: <MdOutlineKeyboardArrowDown />}],
    hasList: true,
    list: [ 
        {key: uuidv4(), cap: 'Fuel purchase', action: () => {console.log("Fuel purchase")}},
        {key: uuidv4(), cap: 'Item purchase', action: () => {console.log("Item purchase")}},
    ]
 },
 {
    caption: 'Edit',
    iconList: [],
    hasList: false,
    action: () => {console.log("Edit ")},
 },
 {
    caption: 'Vendor Statement',
    iconList: [],
    hasList: false,
    action: () => {console.log("vendor statment ")},
 },
 {
    caption: '',
    iconList: [{key: uuidv4(), icon: <MdOutlineMoreHoriz />}],
    hasList: true,
    list: [ 
        {cap: 'Duplicate', action: () => {console.log("Duplicate ")}},
        {cap: 'Delete', action: () => {console.log("Delete")}},
    ]
 },
];