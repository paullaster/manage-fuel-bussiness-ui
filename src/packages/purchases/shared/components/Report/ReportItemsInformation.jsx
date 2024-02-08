import { DataTable } from '@/components';
import Box from '@mui/material/Box';
import { useMemo } from 'react';

const ReportItemsInformation = () => {
    const columns = useMemo(() => [
        {
            field: 'vendor_name',
            headerName: 'Name',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'vendor_email',
            headerName: 'Email ',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'vendor_phone',
            headerName: 'Phone',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'company_name',
            headerName: 'Company name',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'website',
            headerName: 'Website',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            editable: false,
            hideable: false,
            align: 'center',
        },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
            getActions: (params) => {
                return [
                    <GridActionsCellItem
                        key={uuidv4()}
                        icon={<MdOutlineVisibility size={20} />}
                        label="View"
                        onClick={() => {
                            handleViewClick(params)
                        }}
                    />,
                    <GridActionsCellItem
                        key={uuidv4()}
                        icon={<MdDelete size={20} />}
                        label="Delete"
                        onClick={() => {
                            handleDelete(params)
                        }}
                    />
                ]
            }
        },
    ], []);
  return (
    <Box>

    </Box>
  )
}

export default ReportItemsInformation