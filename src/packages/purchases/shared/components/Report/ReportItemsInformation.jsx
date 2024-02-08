import { DataTable } from '@/components';
import Box from '@mui/material/Box';
import { useEffect, useMemo } from 'react';
import { usePurchasesState } from '../../../Context';
import { AddIDFieldToArray } from '@/utils';

const ReportItemsInformation = () => {

    const { bill } = usePurchasesState();
    const rows = bill?.tank_entries ? AddIDFieldToArray(bill.tank_entries, 'uuid') : bill?.items ?   AddIDFieldToArray(bill?.items, 'uuid') : [];

    const columns = useMemo(() => [
        {
            field: 'vendor_name',
            headerName: 'Item',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'vendor_email',
            headerName: 'Qunatity ',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'vendor_phone',
            headerName: 'Price',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'company_name',
            headerName: 'Amount',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        }
    ], []);

    useEffect(() => {

    }, [bill]);
    return (
        <Box>
            <DataTable
                columns={columns}
                rows={rows}
                style={{ minHeight: 400, height: 'auto' }}
                initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
                pageSizeOptions={[5, 10, 20, 30, 50]}
            />
        </Box>
    )
}

export default ReportItemsInformation