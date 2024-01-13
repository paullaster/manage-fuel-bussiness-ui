import { apiFetchUtil, GetGross } from "@/utils";
import shared from "../../../shared";

export default [
    {
        field: 'item',
        headerName: 'Item',
        width: 200,
        type: 'singleSelect',
        valueOptions: ['fuel', 'tico'],
        editable: true,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 200,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 200,
        editable: true,
    },
    
    {
        field: 'vat_rate',
        headerName: 'Tax rate',
        width: 200,
        editable: true,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        description: 'Derived amount',
        sortable: false,
        width: 200,
        renderCell: (params) => {
            return (Number(params.row.quantity)  || 0) * (Number(params.row.price) || 0);
        }
    },
    {
        field: 'gross_amount',
        headerName: 'Gross amount',
        description: 'Derived amount',
        sortable: false,
        width: 200,
        renderCell: (params) => GetGross(params.row),
    },

    {
        field: 'action',
        headerName: 'Action',
        description: 'user action',
        sortable: false,
        width: 100,
        renderCell: (params) =>  <shared.components.FormAction row = {params} />
    }
];