import Box from '@mui/material/Box';
import { DataTable } from '@/components';
import { useState } from 'react';

const VendorList = () => {
    const [rows, setRows] = useState([]);

  const columns = [
    {
        field: 'vendor_name',
        headerName: 'name',
        width: 300,
        headerAlign: 'center',
    },
    {
        field: 'vendor_email',
        headerName: 'email ',
        width: 200,
        headerAlign: 'center'
    },
    {
        field: 'vendor_phone',
        headerName: 'phone',
        width: 200,
        headerAlign: 'center'
    },
    {
        field: 'company_name',
        headerName: 'company name',
        width: 300,
        headerAlign: 'center'
    },
    {
        field: 'website',
        headerName: 'website',
        width: 200,
        headerAlign: 'center'
    },
    {
        field: 'actions',
        headerName: 'actions',
        type: 'actions',
        width: 200,
        headerAlign: 'center'
    },
  ]
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