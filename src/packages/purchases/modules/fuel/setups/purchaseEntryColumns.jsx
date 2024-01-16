import { apiFetchUtil, GetGross } from "@/utils";
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";


const tanks = WebStorage.GetFromWebStorage('session', APPNAME).tanks;

export default [
    {
        field: 'tank',
        headerName: 'Tank',
        width: 80,
        editable: true,
        type: 'singleSelect',
        valueOptions: () => tanks.map((tank) => {
            return `tank ${tank.tank_number}`
        }),
        sortable: false,
    },
    {
        field: 'fuel_type',
        headerName: 'Fuel Type',
        width: 120,
        editable: false,
        sortable: false,
        type: 'singleSelect',
        valueOptions: [],
        valueGetter: async (params) => {
            if(params.row.tank === '' || undefined || null) return 'No tank selected';
            let tank = await apiFetchUtil(params.row)
            return tank.fuel_type;
        }
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
        width: 130,
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
        width: 100,
        editable: true,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        description: 'Derived amount',
        sortable: false,
        width: 100,
        valueGetter: (params) => {
            return Number(params.row.expected_quantity)  || 0 * Number(params.row.price) || 0;
        }
    },
    {
        field: 'action',
        headerName: 'Action',
        description: 'user action',
        sortable: false,
        width: 100,
        valueGetter: (params) => {
            return Number(params.row.expected_quantity)  || 0 * Number(params.row.price) || 0;
        }
    }
];