import { useEffect, useState, useMemo} from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { Form } from "react-router-dom";
import { composableAutofils} from "../setups";
import TankEntries from "./TankEntries";
import TransportationAndOfficer from "./TransportationAndOfficer";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import NewVendor from "../../vendors/components/NewVendor";
import { v4 as uuidv4 } from 'uuid';
import {
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import { apiFetchUtil, GetGross } from "@/utils";
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";
import DataGridToolbar from "../../../shared/components/DataGridToolbar";
import { MdOutlineSaveAlt, MdCreate, MdCancel, MdDelete } from "react-icons/md";


const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);
let fueType = '';
const NewFuelPurchase = () => {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});


  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();

  const [vendorsList, setVendorsList] = useState([{ id: 1, name: 'Vendor X' }, { id: 2, name: 'Vendor Y' }, { id: 3, name: 'Vendor Z' }]);
  const [officers, setOfficers] = useState([{ id: 1, name: 'Ken Mjungu' }, { id: 2, name: 'Waigah Mwaura' }]);

  const billNumberRef = useRef(null);
  const invoiceNumberRef = useRef(null);
  const purchaseOrderNumberRef = useRef(null);
  const deliveryNoteNumberRef = useRef(null);


  const billingInfoRefObject = {
    billNumberRef,
    invoiceNumberRef,
    purchaseOrderNumberRef,
    deliveryNoteNumberRef,
  };

  const deleteItem = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };
   

  const handleEditClick = (id) => {
    setRowModesModel({...rowModesModel, [id]: { mode: GridRowModes.Edit}});
  };

  const handleSaveClick = (id) => {
    setRowModesModel({...rowModesModel, [id]: { mode: GridRowModes.View}});
  };

  const handleCancelClick = (id) => {
    setRowModesModel({
      ...rowModesModel,
      [id]: {mode: GridRowModes.View, ignoreModifications: true}
    });

    const editedRow = rows.find((row) => row.id === id );
    if(editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
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


  const columns = useMemo( () =>[
    {
        field: 'tank',
        headerName: 'Tank',
        width: 150,
        editable: true,
        type: 'singleSelect',
        valueOptions: () => orgData.tanks.map((tank) => {
          return tank.tank_number
        }),
        valueFormatter: (params) => {
          if(!params.value) {
            return 'Select tank'
          }
          apiFetchUtil(params, 'fuel_type')
            .then((res) => fueType = res);
          return `Tank  ${params.value}`
        },
        sortable: false,
        hideable: false,
      },
      {
        field: 'fuel_type',
        headerName: 'Fuel Type',
        width: 150,
        editable: false,
        sortable: false,
        type: 'string',
        valueGetter: (params) => (params.row.tank === '' || undefined || null) ? 'No tank selected' : fueType,
        hideable: false,

      },
      {
        field: 'dip_quantity_before_offloading',
        headerName: 'Dip quantity before offloading',
        width: 240,
        editable: true,
        hideable: false,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'sales_quantity_during_offloading',
        headerName: 'Sales quantity during offloading',
        width: 240,
        editable: true,
        hideable: false,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'actual_dip_quantity_after_offloading',
        headerName: 'Actual dip quantity after offloading',
        width: 240,
        editable: true,
        hideable: false,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'expected_quantity',
        headerName: 'Expected quantity',
        width: 130,
        editable: true,
        hideable: false,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'variance',
        headerName: 'Variance',
        width: 100,
        editable: true,
        hideable: false,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 100,
        editable: true,
        hideable: false,
        headerAlign: 'center',
        type: 'number',
        align: 'center',
      },
      {
        field: 'tax_rate',
        headerName: 'Tax rate',
        type: 'number',
        width: 80,
        editable: true,
        valueFormatter: (params) => {
          if (!params.value) {
            return '0%';
          }
          return `${params.value.toLocaleString()}%`
        },
        hideable: false,
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'tax_amount',
        headerName: 'Tax amount',
        width: 120,
        editable: false,
        valueGetter: (params) => GetGross(params.row, 'tax_rate', 'expected_quantity', 'price', 'tax_amount'),
        hideable: false,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'amount',
        headerName: 'Amount',
        description: 'amount',
        sortable: false,
        width: 100,
        editable: false,
        valueGetter: (params) => {
          console.log(params.row.expected_quantity * params.row.price);
          console.log(params);
          return params.row.expected_quantity * params.row.price;
        },
        type: 'number',
        hideable: false,
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'gross_amount',
        headerName: 'Gross amount',
        description: 'gross amount',
        sortable: false,
        width: 150,
        valueGetter: (params) => GetGross(params.row, 'tax_rate', 'expected_quantity', 'price', 'gross_amount'),
        type: 'number',
        hideable: false,
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        hideable: false,
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
          return[
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
        },
      },
    ]);

  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  return (
    <section className="newfuelpurchase">
      <shared.components.SectionIntroduction text="New Fuel Purchase" />
      <Form>
        <shared.components.BillingComponent cardLabelView={cardLabelView} >
          <NewVendor />
        </shared.components.BillingComponent>
        <TransportationAndOfficer cardLabelView={cardLabelView} />
        <TankEntries
          columns={columns}
          rows={rows}
          rowModesModel={rowModesModel}
          handleRowModesModelChange={handleRowModesModelChange}
          handleRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: DataGridToolbar }}
          slotProps={{ toolbar: { setRows, setRowModesModel } }}
        />
        <FormButtonRow className="form_actions"/>
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
