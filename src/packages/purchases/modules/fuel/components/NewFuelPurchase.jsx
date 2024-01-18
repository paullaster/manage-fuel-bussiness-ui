import { useEffect, useState, useMemo, useCallback } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { Form } from "react-router-dom";
import { composableAutofils, NewFuelPurchaseInitialValues } from "../setups";
import TankEntries from "./TankEntries";
import TransportationAndOfficer from "./TransportationAndOfficer";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import NewVendor from "../../vendors/components/NewVendor";
import { v4 as uuidv4 } from 'uuid';
import { 
  GridActionsCellItem,
  GridRowModes,
  GridToolbarContainer,
  GridRowEditStopReasons
 } from '@mui/x-data-grid';
import { MdDelete } from "react-icons/md";
import { apiFetchUtil, GetGross } from "@/utils";
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";
import DataGridToolbar from "../../../shared/components/DataGridToolbar";


const NewFuelPurchase = () => {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});


  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  
  const tanks = WebStorage.GetFromWebStorage('session', APPNAME).tanks;
  let fueType = '';
  const deleteItem = useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const columns = useMemo(
    () => [
      {
        field: 'tank',
        headerName: 'Tank',
        width: 150,
        editable: true,
        type: 'singleSelect',
        valueOptions: () => tanks.map((tank) => {
          return tank.tank_number
        }),
        valueFormatter: (params) => {
          if (!params.value) {
            return 'select tank'
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
        width: 80,
        editable: true,
        valueFormatter: (params) => `${params.value}%`,
        hideable: false,
        headerAlign: 'center',
        type: 'number',
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
          return (Number(params.row.expected_quantity) || 0) * (Number(params.row.price) || 0);
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
        getActions: (params) => [
          <GridActionsCellItem
            key={uuidv4()}
            icon={<MdDelete  size={25}/>}
            label="Delete"
            onClick={deleteItem(params.id)}
          />,
        ],
        hideable: false,
      },
    ],
    [deleteItem],
  );
  const handleAddNewItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setRows((prev) => [...prev, { id: uuidv4(), ...NewFuelPurchaseInitialValues }]);
  };


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
        <TankEntries columns={columns} rows={rows} slots={{toolbar: DataGridToolbar}} handleAddNewItem={handleAddNewItem} />
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
