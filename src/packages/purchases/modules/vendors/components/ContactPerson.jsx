import { DataTable } from '@/components';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import DivisionTopBar from '../../../shared/components/DivisionTopBar';
import { useMemo, useState, useEffect  } from 'react';
import { GridRowModes, GridActionsCellItem, GridToolbarContainer, GridRowEditStopReasons, } from '@mui/x-data-grid';
import { MdOutlineSaveAlt, MdCancel, MdCreate, MdDelete, MdAdd } from 'react-icons/md';


const rowInitialValues = {
    contact_name: '',
    contact_email: '',
    contact_phone_number: '',
};

const GridTableToolbar = ({ setRows, setRowModesModel, rows, handleSubmitContactInfo }) => {
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

    const saveContactPerson = () => {
        handleSubmitContactInfo(rows);
    }

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<MdAdd size={25} />} onClick={handleAddcontact}>
                Add contact
            </Button>
            <Button color="primary"  variant="contained" startIcon={<MdOutlineSaveAlt size={25} />} onClick={saveContactPerson}>
                save contacts
            </Button>
        </GridToolbarContainer>
    )
}
const ContactPerson = ({handleSubmitContactInfo}) => {
    const [rows, setRows] = useState([]);
    const [rowModesModel, setRowModesModel] = useState({});

    const deleteItem = (item) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== item.id));
    };


    const handleEditClick = (item) => {
        setRowModesModel({ ...rowModesModel, [item.id]: { mode: GridRowModes.Edit } });
        console.log(rowModesModel);
    };

    const handleSaveClick = (item) => {
        setRowModesModel({ ...rowModesModel, [item.id]: { mode: GridRowModes.View } });
    };

    const handleCancelClick = (item) => {
        setRowModesModel({
            ...rowModesModel,
            [item.id]: { mode: GridRowModes.View, ignoreModifications: true }
        });

        const editedRow = rows.find((row) => row.id === item.id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== item.id));
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
                getActions: (params) => {
                    const isInEditMode = rowModesModel[params.id]?.mode === GridRowModes.Edit;
                    if (isInEditMode) {
                        return [
                            <GridActionsCellItem
                                key={uuidv4()}
                                icon={<MdOutlineSaveAlt />}
                                label="Save"
                                onClick={() => {
                                    handleSaveClick(params)
                                }}
                            />,
                            <GridActionsCellItem
                                key={uuidv4()}
                                icon={<MdCancel />}
                                label="Cancel"
                                className="textPrimary"
                                onClick={() => {
                                    handleCancelClick(params)
                                }}
                                color="inherit"
                            />,
                        ];
                    }
                    return [
                        <GridActionsCellItem
                            key={uuidv4()}
                            icon={<MdCreate />}
                            label="Edit"
                            onClick={() => {
                                handleEditClick(params)
                            }}
                        />,
                        <GridActionsCellItem
                            key={uuidv4()}
                            icon={<MdDelete />}
                            label="Delete"
                            onClick={() => {
                                deleteItem(params)
                            }}
                        />,
                    ]
                }
            }
        ]
    }, [handleEditClick, handleSaveClick]);

    useEffect(() => {

    }, [contactColumns, rows]);

    return (
        <div className='contactPerson'>
            <DivisionTopBar
                sectionTitle={'Contact persons'}
            >
            <p>To include additional recipients in an email as CC, add them as contact persons.</p>
        </DivisionTopBar>
            <DataTable
                columns={contactColumns}
                rows={rows}
                rowModesModel={rowModesModel}
                processRowUpdate={processRowUpdate}
                onRowModesModelChange={handleRowModesModelChange}
                handleRowEditStop={handleRowEditStop}
                slots={
                    { toolbar: GridTableToolbar }
                }
                slotProps={{
                    toolbar: { setRows, setRowModesModel, rows, handleSubmitContactInfo }
                }}
                style={{ height: 'auto', width: '100%' }}
            />
        </div>
    )
}

export default ContactPerson