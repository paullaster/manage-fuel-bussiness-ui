import { useEffect, useMemo, useState } from 'react';
import { DataTable } from '@/components';
import { GridToolbarContainer, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { MdAdd, MdOutlineSaveAlt, MdCancel, MdCreate, MdDelete } from 'react-icons/md';

const rowInitialValues = {
    contact_name: '',
    contact_email: '',
    contact_phone_number: '',
};

const GridTableToolbar = ({ setRows, setRowModesModel }) => {
    const handleAddcontact = () => {
        const id = uuidv4();
        setRows(
            (rows) => [...rows, { id, ...rowInitialValues, isNew: true }]
        );
        setRowModesModel(
            (rowModesModel) => ({
                ...rowModesModel,
                [id]: { mode: GridRowModes.Edit, fieldToFocus: 'contact_name' }
            })
        );
    }
    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<MdAdd size={25} />} onClick={handleAddcontact}>
                Add contact
            </Button>
        </GridToolbarContainer>
    )
}
const ContactPerson = ({rows, columns, setRows, rowModesModel, setRowModesModel, processRowUpdate, handleRowModesModelChange, handleRowEditStop}) => {


    
    return (
        <DataTable
            columns={columns}
            rows={rows}
            rowModesModel={rowModesModel}
            processRowUpdate={processRowUpdate}
            onRowModesModelChange={handleRowModesModelChange}
            handleRowEditStop={handleRowEditStop}
            slots={
                { toolbar: GridTableToolbar }
            }
            slotProps={{
                toolbar: { setRows, setRowModesModel }
            }}
        />
    )
}

export default ContactPerson