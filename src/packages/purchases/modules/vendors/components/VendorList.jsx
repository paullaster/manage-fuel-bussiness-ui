import Box from '@mui/material/Box';
import { DataTable } from '@/components';

const VendorList = () => {

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
        />
    </Box>
  )
}

export default VendorList