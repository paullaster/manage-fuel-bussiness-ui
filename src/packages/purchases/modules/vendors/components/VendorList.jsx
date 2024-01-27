import Box from '@mui/material/Box';
import { DataTable } from '@/components';
import { useEffect, useMemo, useState } from 'react';
import { fetchVendorsList } from '../../../actions';

const VendorList = () => {
    const [rows, setRows] = useState([]);

  const columns = useMemo(() =>[
    {
        field: 'vendor_name',
        headerName: 'name',
        width: 300,
        headerAlign: 'center',
        sortable: true,
        hideable: false,
        editable: false,
    },
    {
        field: 'vendor_email',
        headerName: 'email ',
        width: 200,
        headerAlign: 'center',
        sortable: false,
        hideable: false,
        editable: false,
    },
    {
        field: 'vendor_phone',
        headerName: 'phone',
        width: 200,
        headerAlign: 'center',
        sortable: false,
        hideable: false,
        editable: false,
    },
    {
        field: 'company_name',
        headerName: 'company name',
        width: 300,
        headerAlign: 'center',
        sortable: true,
        hideable: false,
        editable: false,
    },
    {
        field: 'website',
        headerName: 'website',
        width: 200,
        headerAlign: 'center',
        sortable: false,
        editable: false,
        hideable: false
    },
    {
        field: 'actions',
        headerName: 'actions',
        type: 'actions',
        width: 200,
        headerAlign: 'center',
        sortable: false,
        hideable: false,
        editable: false,
    },
  ], []);

  useEffect(() => {
    fetchVendorsList()
    .then((res) => {
        setRows(res.results);
    })
    .catch((error) => {
        console.log(error);
    });

    return () => {
        
    }
  }, [rows]);
  return (
    <Box>
        <DataTable 
        columns={columns}
        rows={rows}
        />
    </Box>
  )
}

export default VendorList