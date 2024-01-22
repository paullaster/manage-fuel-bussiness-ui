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




const ContactPerson = () => {
    const [rows, setRows] = useState([]);
    const [rowModesModel, setRowModesModel] = useState({});


    const deleteItem = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };


    const handleEditClick = (id) => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleCancelClick = (id) => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true }
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const handleRowEditStop = (params, event) => {
        if (params.reason == GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };


    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => row.id === newRow.id ? updatedRow : row));
        console.log({ rows: rows });
        return updatedRow;
    };



    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

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
                getActions: ({id}) => {
                    const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                    if (isInEditMode) {
                        return [
                            <GridActionsCellItem
                                key={uuidv4()}
                                icon={<MdOutlineSaveAlt />}
                                label="Save"
                                onClick={ () => {
                                    useEffect(() => {
                                        handleSaveClick(id)
                                    }, [id])
                                }}
                            />,
                            <GridActionsCellItem
                                key={uuidv4()}
                                icon={<MdCancel />}
                                label="Cancel"
                                className="textPrimary"
                                onClick={() => {
                                    useEffect( () => {
                                        handleCancelClick(id)
                                    }, [id])
                                }}
                                color="inherit"
                            />,
                        ];
                    }
                    return [
                        <GridActionsCellItem
                            key={uuidv4()}
                            icon={<MdCreate size={25} />}
                            label="Edit"
                            onClick={()=> {
                                useEffect( () => {
                                    handleEditClick(id)
                                }, [id])
                            }}
                        />,
                        <GridActionsCellItem
                            key={uuidv4()}
                            icon={<MdDelete size={25} />}
                            label="Delete"
                            onClick={() => {
                                useEffect(()=> {
                                    deleteItem(id)
                                }, [id])
                            }}
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
            processRowUpdate={processRowUpdate}
            onRowModesModelChange={handleRowModesModelChange}
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