import Box from '@mui/material/Box';
import { DataTable } from '@/components';
import { useState } from 'react';

const VendorList = () => {
    const [rows, setRows] = useState([]);

  const columns = [
    {
        field: 'name',
        headerName: 'Vendor name'
    }
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