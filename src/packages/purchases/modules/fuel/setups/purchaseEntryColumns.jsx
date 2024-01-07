export default [
    {
        field: 'tank',
        headerName: 'Tank',
        width: 80,
        editable: true,
    },
    {
        field: 'fuel_type',
        headerName: 'Fuel Type',
        width: 150,
        editable: false,
        sortable: false,
        valueGetter: (params) => {
            
        }
    },
    {
        field: 'dip_quantity_before_offloading',
        headerName: 'Dip quantity before offloading',
        width: 210,
        editable: true,
    },
    {
        field: 'sales_quantity_during_offloading',
        headerName: 'Sales quantity during offloading',
        width: 210,
        editable: true,
    },
    {
        field: 'actual_dip_quantity_after_offloading',
        headerName: 'Actual dip quantity after offloading',
        width: 210,
        editable: true,
    },
    {
        field: 'expected_quantity',
        headerName: 'Expected quantity',
        width: 210,
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