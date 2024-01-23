import { useEffect, useMemo, useState } from "react";
import { Form } from "react-router-dom";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { composableAutofils } from "../setups";
import PurchaseItemEntry from "./PurchaseItemEntry";
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";
import { MdDelete, MdOutlineSaveAlt, MdCancel, MdCreate } from "react-icons/md";
import NewVendor from "../../vendors/components/NewVendor";
import {
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import { GetGross } from "@/utils";
import { v4 as uuidv4 } from 'uuid';
import DataGridToolbar from "../../../shared/components/DataGridToolbar";


const items = WebStorage.GetFromWebStorage('session', APPNAME).items;

const NewItem = () => {
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  const deleteItem = (item) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== item.id));
};


const handleEditClick = (item) => {
setRowModesModel({...rowModesModel, [item.id]: { mode: GridRowModes.Edit}});
};

const handleSaveClick = (item) => {
setRowModesModel({...rowModesModel, [item.id]: { mode: GridRowModes.View}});
};

const handleCancelClick = (item) => {
setRowModesModel({
  ...rowModesModel,
  [item.id]: {mode: GridRowModes.View, ignoreModifications: true}
});

const editedRow = rows.find((row) => row.id === item.id );
if(editedRow.isNew) {
  setRows(rows.filter((row) => row.id !== item.id));
}
};

const handleRowEditStop = (params, event) => {
if(params.reason == GridRowEditStopReasons.rowFocusOut) {
  event.defaultMuiPrevented = true;
}
};


const processRowUpdate = (newRow) => {
const updatedRow = {...newRow, isNew: false};
setRows(rows.map((row) => row.id === newRow.id ? updatedRow : row));
console.log({rows: rows});
return updatedRow;
};



const handleRowModesModelChange = (newRowModesModel) => {
setRowModesModel(newRowModesModel);
};


  const columns = useMemo(
    () => [
      {
        field: 'item',
        headerName: 'Item',
        width: 200,
        type: 'singleSelect',
        valueOptions: () => items.map((item) => {
          return `Item ${item.item_id}`
        }),
        editable: true,
        hideable: false,

      },
      {
        field: 'quantity',
        headerName: 'Quantity',
        width: 200,
        editable: true,
        hideable: false,
        headerAlign: 'center',
        type: 'number',
        align: 'center',
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 200,
        editable: true,
        hideable: false,
        headerAlign: 'center',
        type: 'number',
        align: 'center',
      },

      {
        field: 'vat_rate',
        headerName: 'Tax rate',
        width: 200,
        editable: true,
        hideable: false,
        headerAlign: 'center',
        type: 'number',
        align: 'center',
        valueFormatter:(params) => {
          if (params.value === null) {
            return '0%';
          }
          return `${params.value.toLocaleString()} %`;
        }
      },
      {
        field: 'amount',
        headerName: 'Amount',
        description: 'Derived amount',
        sortable: false,
        width: 200,
        valueGetter: (params) => {
          return (Number(params.row.quantity) || 0) * (Number(params.row.price) || 0);
        },
        hideable: false,
        headerAlign: 'center',
        type: 'number',
        align: 'center',
      },
      {
        field: 'gross_amount',
        headerName: 'Gross amount',
        description: 'Derived amount',
        sortable: false,
        width: 200,
        valueGetter: (params) => GetGross(params.row, 'vat_rate', 'quantity', 'price', 'gross_amount'),
        hideable: false,
        headerAlign: 'center',
        type: 'number',
        align: 'center',
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        cellClassName: 'actions',
        getActions: (params) => {
          const isInEditMode = rowModesModel[params.id]?.mode === GridRowModes.Edit;

          if (isInEditMode) {
            return [
              <GridActionsCellItem 
              key={uuidv4()}
              icon={<MdOutlineSaveAlt />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={ () => handleSaveClick(params)}
              />,
              <GridActionsCellItem
              key={uuidv4()}
              icon={<MdCancel />}
              label="Cancel"
              className="textPrimary"
              onClick={ () => handleCancelClick(params)}
              color="inherit"
            />,
            ];
          }
          return[
            <GridActionsCellItem
              key={uuidv4()}
              icon={<MdCreate />}
              label="Edit"
              onClick={ () => handleEditClick(params)}
            />,
            <GridActionsCellItem
              key={uuidv4()}
              icon={<MdDelete />}
              label="Delete"
              onClick={ () => deleteItem(params)}
            />,
          ]
        },
        hideable: false,
      },
    ],
    [handleSaveClick, handleCancelClick, handleEditClick,  deleteItem],
  );

  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  useEffect(() => {

  }, [columns])

  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purchase item" />
      <Form method="post">
        <shared.components.BillingComponent cardLabelView={cardLabelView} >
          <NewVendor />
        </shared.components.BillingComponent>
        <PurchaseItemEntry
          columns={columns}
          rows={rows}
          rowModesModel={rowModesModel}
          handleRowModesModelChange={handleRowModesModelChange}
          handleRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: DataGridToolbar }}
          slotProps={{ toolbar: { setRows, setRowModesModel } }}
        />
        <FormButtonRow className='form_actions_wide' />
      </Form>
    </section>
  )
}

export default NewItem