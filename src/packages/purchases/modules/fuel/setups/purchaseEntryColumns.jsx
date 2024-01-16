import { apiFetchUtil, GetGross } from "@/utils";
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";


const tanks = WebStorage.GetFromWebStorage('session', APPNAME).tanks;

export default [
    {
        field: 'tank',
        headerName: 'Tank',
        width: 150,
        editable: true,
        type: 'singleSelect',
        valueOptions: () => tanks.map((tank) => {
            return tank.tank_number
        }),
        valueFormatter: (params) => {
            if(!params.value) {
                return 'select tank'
            }
            return `Tank ${params.value}`
        },
        sortable: false,
    },
    {
        field: 'fuel_type',
        headerName: 'Fuel Type',
        width: 150,
        editable: false,
        sortable: false,
        type: 'string',
        valueGetter: (params) => (params.row.tank === '' || undefined || null || 'select tank') ? 'No tank selected' : apiFetchUtil(params.row, 'fuel_type')

    },
    {
        field: 'dip_quantity_before_offloading',
        headerName: 'Dip quantity before offloading',
        width: 250,
        editable: true,
    },
    {
        field: 'sales_quantity_during_offloading',
        headerName: 'Sales quantity during offloading',
        width: 250,
        editable: true,
    },
    {
        field: 'actual_dip_quantity_after_offloading',
        headerName: 'Actual dip quantity after offloading',
        width: 250,
        editable: true,
    },
    {
        field: 'expected_quantity',
        headerName: 'Expected quantity',
        width: 100,
        editable: true,
    },
    {
        field: 'variance',
        headerName: 'Variance',
        width: 100,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100,
        editable: true,
    },
    
    {
        field: 'tax_rate',
        headerName: 'Tax rate',
        width: 80,
        editable: true,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        description: 'amount',
        sortable: false,
        width: 120,
        valueGetter: (params) => {
            return (Number(params.row.quantity)  || 0) * (Number(params.row.price) || 0);
        },
        type: 'number',
    },
    {
        field: 'gross_amount',
        headerName: 'Gross amount',
        description: 'gross amount',
        sortable: false,
        width: 80,
        valueGetter: (params) => GetGross(params.row, 'tax_rate'),
        type: 'number',
    },
    {
        field: 'action',
        headerName: 'Action',
        description: 'user action',
        sortable: false,
        width: 80,
        type: 'actions',
    }
];