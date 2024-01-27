

export default 
[
 {
    caption: 'New',
    iconList: [],
    hasList: true,
    list: [ 
        {cap: 'Fuel purchase', action: () => {console.log("Fuel purchase")}},
        {cap: 'Item purchase', action: () => {console.log("Item purchase")}},
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
    iconList: [],
    hasList: true,
    list: [ 
        {cap: 'Duplicate', action: () => {console.log("Duplicate ")}},
        {cap: 'Delete', action: () => {console.log("Delete")}},
    ]
 },
];