import { useMemo, useState } from 'react';
import { DataTable } from '@/components';
import { GridToolbarContainer, GridRowModes } from '@mui/x-data-grid';
import Button from '@mui/material/Button';


const GridTableToolbar = () => {
    return (
        <GridToolbarContainer>
            <Button>
                Add contact
            </Button>
        </GridToolbarContainer>
    )
}




const ContactPerson = () => {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});



  const contactColumns = useMemo(() => {
    return [
        {
            field: 'contact_name',
            headerName: 'Name',
            type: 'string',
            width: 250,
            headerAlign: 'center',
            editable: true,
        },
        {
            field: 'contact_email',
            headerName: 'Email',
            type: 'string',
            width: 250,
            headerAlign: 'center',
            editable: true,
        },
        {
            field: 'contact_phone_number',
            headerName: 'Phone',
            type: 'string',
            width: 250,
            headerAlign: 'center',
            editable: true
        }
    ]
  })  
  return (
    <DataTable 
     columns={contactColumns}
     rows={rows}
     slots={
        {toolbar: GridTableToolbar}
     }
     slotProps={{
        toolbar: {setRows, setRowModesModel}
     }}
    />
  )
}

export default ContactPerson