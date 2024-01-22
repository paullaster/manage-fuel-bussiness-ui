import { useMemo, useState } from 'react';
import { DataTable } from '@/components';
import { GridToolbarContainer, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineSaveAlt, MdCancel, MdCreate } from 'react-icons/md';

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
            <Button onClick={handleAddcontact}>
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
            },
            {
                field: 'actions',
                headerName: 'Action',
                type: 'actions',
                getActions: (params) => {
                    const isInEditMode = rowModesModel[params.id]?.mode === GridRowModes.Edit;

                    if (isInEditMode) {
                        return [
                            <GridActionsCellItem
                                key={uuidv4()}
                                icon={<MdOutlineSaveAlt />}
                                label="Save"
                                onClick={handleSaveClick(params.id)}
                            />,
                            <GridActionsCellItem
                                key={uuidv4()}
                                icon={<MdCancel />}
                                label="Cancel"
                                className="textPrimary"
                                onClick={handleCancelClick(params.id)}
                                color="inherit"
                            />,
                        ];
                    }
                    return [
                        <GridActionsCellItem
                            key={uuidv4()}
                            icon={<MdCreate size={25} />}
                            label="Edit"
                            onClick={handleEditClick(params.id)}
                        />,
                        <GridActionsCellItem
                            key={uuidv4()}
                            icon={<MdDelete size={25} />}
                            label="Delete"
                            onClick={deleteItem(params.id)}
                        />,
                    ]
                }
            }
        ]
    })
    return (
        <DataTable
            columns={contactColumns}
            rows={rows}
            rowModesModel={rowModesModel}
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