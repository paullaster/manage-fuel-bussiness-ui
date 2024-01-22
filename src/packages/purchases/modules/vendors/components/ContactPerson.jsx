import { useMemo, useState } from 'react';
import { DataTable } from '@/components';
import { GridToolbarContainer, GridRowModes } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

const rowInitialValues = {
    contact_name: '',
    contact_email: '',
    contact_phone_number: '',
};

const GridTableToolbar = ({setRows, setRowModesModel}) => {
    const handleAddcontact = () => {

    }
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
     rowModesModel={rowModesModel}
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