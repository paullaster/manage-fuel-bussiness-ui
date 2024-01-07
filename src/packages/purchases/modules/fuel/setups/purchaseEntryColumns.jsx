export default [
    {
        field: 'dip_quantity_before_offloading',
        headerName: 'dip q. before offloading',
        width: 80,
        editable: true,
    },
    {
        field: 'sales_quantity_during_offloading',
        headerName: 'sales q.during offloading',
        width: 80,
        editable: true,
    },
    {
        field: 'expected_quantity',
        headerName: 'Expected quantity',
        width: 80,
        editable: true,
    },
    {
        field: 'actual_dip_quantity_after_offloading',
        headerName: 'Actual dip Q. after offloading',
        width: 80,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 10,
        editable: true,
    },
    
    {
        field: 'tax_rate',
        headerName: 'Tax rate',
        editable: true,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        description: 'Derived amount',
        sortable: false,
        width: 40,
        valueGetter: (params) => {
            return Number(params.row.expected_quantity)  || 0 * Number(params.row.price) || 0;
        }
    }
]