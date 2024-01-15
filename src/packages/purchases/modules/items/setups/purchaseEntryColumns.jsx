import { apiFetchUtil, GetGross } from "@/utils";
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";

let tanks = WebStorage.GetFromWebStorage('session', APPNAME);



export default [
    {
        field: 'item',
        headerName: 'Item',
        width: 200,
        type: 'singleSelect',
        valueOptions: () => apiFetchUtil(),
        editable: true,
        headerAligne: 'center,'
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 200,
        editable: true,
        type: 'string',
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 200,
        editable: true,
        type: 'string'
    },
    
    {
        field: 'vat_rate',
        headerName: 'Tax rate',
        width: 200,
        editable: true,
        type: 'string',
    },
    {
        field: 'amount',
        headerName: 'Amount',
        description: 'Derived amount',
        sortable: false,
        width: 200,
        type: 'number',
        valueGetter: (params) => {
            return (Number(params.row.quantity)  || 0) * (Number(params.row.price) || 0);
        }
    },
    {
        field: 'gross_amount',
        headerName: 'Gross amount',
        description: 'Derived amount',
        sortable: false,
        width: 200,
        type: 'number',
        valueGetter: (params) => GetGross(params.row),
    },

    {
        field: 'action',
        headerName: 'Action',
        description: 'user action',
        sortable: false,
        width: 100,
        type: 'actions',
    }
];