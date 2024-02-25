import { DataTable } from '@/components';
import Box from '@mui/material/Box';
import { useEffect, useMemo } from 'react';
import { usePurchasesState } from '../../../Context';
import { AddIDFieldToArray } from '@/utils';
import { fetchfuelType } from '../../../actions';

const ReportItemsInformation = () => {

    const { bill } = usePurchasesState();
    const rows = bill?.tank_entries ? AddIDFieldToArray(bill.tank_entries, 'uuid') : bill?.items ?   AddIDFieldToArray(bill?.items, 'uuid') : [];

    const columns = useMemo(() => [
        {
            field: 'fuel_type',
            headerName: 'Item',
            width: 200,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
            valueGetter: (params) => {
                fetchfuelType({fuel_type_id: params?.row?.tank?.tank_number})
                .then((res) => {
                    return res.type;
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        {
            field: 'expected_quantity',
            headerName: 'Qunatity ',
            width: 100,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 100,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'gross_amount',
            headerName: 'Amount',
            width: 200,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        }
    ], []);

    useEffect(() => {

    }, [columns, bill]);
    return (
        <Box>
            <DataTable
                columns={columns}
                rows={rows}
                style={{  minHeight: 400, heigh: 'auto' }}
                initialState={{ pagination: { paginationModel: { page: 0, pageSize: 0 } } }}
                pageSizeOptions={[]}
            />
        </Box>
    )
}

export default ReportItemsInformation