import { apiFetchUtil } from "@/utils";

export default [
    {
        field: 'item',
        headerName: 'Item',
        width: 200,
        editable: true,
    },
    {
        field: 'expected_quantity',
        headerName: 'Expected quantity',
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
        field: 'tax_rate',
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
        valueGetter: (params) => {
            return Number(params.row.expected_quantity)  || 0 * Number(params.row.price) || 0;
        }
    },
    {
        field: 'action',
        headerName: 'Action',
        description: 'user action',
        sortable: false,
        width: 200,
        valueGetter: (params) => {
            return Number(params.row.expected_quantity)  || 0 * Number(params.row.price) || 0;
        }
    }
];