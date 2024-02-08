import { DataTable } from '@/components';
import Box from '@mui/material/Box';
import { useEffect, useMemo } from 'react';
import { usePurchasesState } from '../../../Context';
import { AddIDFieldToArray } from '@/utils';
import { fetchfuelType } from '../../../actions';
import { useGridApiContext } from '@mui/x-data-grid';

const ReportItemsInformation = () => {

    const apiRef = useGridApiContext();
    const { bill } = usePurchasesState();
    const rows = bill?.tank_entries ? AddIDFieldToArray(bill.tank_entries, 'uuid') : bill?.items ?   AddIDFieldToArray(bill?.items, 'uuid') : [];

    const handleCellValueRequest = async (params) => {
        try {
          const response = await fetchfuelType({
            fuel_type_id: params?.row?.tank?.tank_number,
          });
          const fuel_type = response.type;
    
          apiRef.current.setRowData(params.id, { fuel_type });
        } catch (error) {
          console.error('Error fetching fuel type:', error);
        }
      };

    const columns = useMemo(() => [
        {
            field: 'fuel_type',
            headerName: 'Item',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
            valueFormatter: handleCellValueRequest
        },
        {
            field: 'expected_quantity',
            headerName: 'Qunatity ',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'gross_amount',
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

    }, [columns, bill]);
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