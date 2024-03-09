import { useEffect, useState, useMemo, useRef, useContext } from "react";
import shared from "../../../shared";
import SummaryComponent from "../../../shared/components/SummaryComponent";
import { useGlobalDispatcher, useGlobalState, LoadingContext, AuthContext } from '@/store';
import { Form, useNavigate } from "react-router-dom";
import { composableAutofils } from "../setups";
import TankEntries from "./TankEntries";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import NewVendor from "../../vendors/components/NewVendor";
import { v4 as uuidv4 } from 'uuid';
import {
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import { GetGross, ObjectValidator, YearMonthDate } from "@/utils";
import DataGridToolbar from "../../../shared/components/DataGridToolbar";
import { MdOutlineSaveAlt, MdCreate, MdCancel, MdDelete } from "react-icons/md";
import Transport from "./Transport";
import { postingFuelPurchase, fetchCompanyTankData } from "../../../actions";
import { usePurchasesState } from '../../../Context';
import { toast } from 'react-toastify';


const NewFuelPurchase = () => {
  const { account } = useContext(AuthContext);
  const { setLoader } = useContext(LoadingContext);
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});


  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView, tankData } = useGlobalState();


  const [summaryValues, setSummaryValues] = useState({ subtotal: 0, taxt_amount_total: 0, total: 0 });
  const [selectedOfficer, setSelectedOfficer] = useState(null);
  const [vendor, setVendor] = useState(null);

  const billNumberRef = useRef(null);
  const invoiceNumberRef = useRef(null);
  const purchaseOrderNumberRef = useRef(null);
  const deliveryNoteNumberRef = useRef(null);
  const billDate = useRef(null);

  const transportNameRef = useRef(null);
  const vehicleRegistrationRef = useRef(null);
  const driverNameRef = useRef(null);

  const { vendors, officers } = usePurchasesState();

  const billingInfoRefObject = {
    billNumberRef,
    invoiceNumberRef,
    purchaseOrderNumberRef,
    deliveryNoteNumberRef,
    billDate,
  };

  // TRANSPORT
  const transportRefObject = {
    transportNameRef,
    vehicleRegistrationRef,
    driverNameRef,
  };

  const handleSelectedVendor = (event, newValue) => {
    event.preventDefault();
    event.stopPropagation();
    setVendor(newValue.vendor_id);
  }

  const handleSelectedOficer = (event, newValue) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(newValue);
    setSelectedOfficer(newValue.id);
  }
  const deleteItem = (params) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== params.id));
  };


  const handleEditClick = (params) => {
    setRowModesModel({ ...rowModesModel, [params.id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (params) => {
    setRowModesModel({ ...rowModesModel, [params.id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = (params) => {
    setRowModesModel({
      ...rowModesModel,
      [params.id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.id === params.id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== params.id));
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


  const columns = useMemo(() => [
    {
      field: 'tank',
      headerName: 'Tank',
      width: 60,
      editable: true,
      type: 'singleSelect',
      valueOptions: () => tankData.map((tank) => {
        return `${tank.id}-${tank.tank_number}`;
      }),
      valueFormatter: (params) => {
        if (params.value) {
          const number = params.value.split('-')[1];
          return `Tank ${number}`;
        }
      },
      sortable: false,
      hideable: false,
    },
    {
      field: 'fuel_type',
      headerName: 'Fuel Type',
      width: 100,
      editable: false,
      sortable: false,
      type: 'string',
      valueGetter: (params) => {
        if (params.row.tank) {
          const tank = tankData.find((t) => t.id === Number(params.row.tank.split('-')[0]));
          return `${tank.fuel_type.type}`;
        }
      },
      hideable: false,

    },
    {
      field: 'dip_quantity_before_offloading',
      headerName: 'Dip quantity before offloading',
      width: 200,
      editable: true,
      hideable: false,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'sales_quantity_during_offloading',
      headerName: 'Sales quantity during offloading',
      width: 200,
      editable: true,
      hideable: false,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'actual_dip_quantity_after_offloading',
      headerName: 'Actual dip quantity after offloading',
      width: 200,
      editable: true,
      hideable: false,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'expected_quantity',
      headerName: 'Expected quantity',
      width: 150,
      editable: true,
      hideable: false,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'variance',
      headerName: 'Variance',
      width: 80,
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
      width: 100,
      editable: false,
      valueGetter: (params) => GetGross(params.row, 'tax_rate', 'expected_quantity', 'price', 'tax_amount'),
      hideable: false,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'net_payable',
      headerName: 'Amount',
      description: 'amount',
      sortable: false,
      width: 100,
      editable: false,
      valueGetter: (params) => {
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
      width: 120,
      valueGetter: (params) => GetGross(params.row, 'tax_rate', 'expected_quantity', 'price', 'gross_amount'),
      type: 'number',
      hideable: false,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'actions',
      type: 'actions',
      width: 60,
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
              onClick={() => handleSaveClick(params)}
            />,
            <GridActionsCellItem
              key={uuidv4()}
              icon={<MdCancel />}
              label="Cancel"
              className="textPrimary"
              onClick={() => handleCancelClick(params)}
              color="inherit"
            />,
          ];
        }
        return [
          <GridActionsCellItem
            key={uuidv4()}
            icon={<MdCreate size={25} />}
            label="Edit"
            onClick={() => handleEditClick(params)}
          />,
          <GridActionsCellItem
            key={uuidv4()}
            icon={<MdDelete size={25} />}
            label="Delete"
            onClick={() => deleteItem(params)}
          />,
        ]
      },
    },
  ], [handleSaveClick, handleCancelClick, handleEditClick, deleteItem]);



  const handleSettingSummary = useMemo(() => {
    if (rows.length) {
      const subtotal = rows.reduce((cummulative, current) => {
        const sub = current.expected_quantity * current.price;
        return cummulative + sub;
      }, summaryValues.subtotal);
      const totalTaxAmount = rows.reduce((cummulative, current) => {
        const txA = GetGross(current, 'tax_rate', 'expected_quantity', 'price', 'tax_amount');
        return cummulative + txA
      }, summaryValues.taxt_amount_total);
      const total = subtotal + totalTaxAmount;
      return setSummaryValues({ subtotal: subtotal, taxt_amount_total: totalTaxAmount, total: total });
    }
    return setSummaryValues({ subtotal: 0, taxt_amount_total: 0, total: 0 });
  }, [rows]);



  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  useEffect(() => {

  }, [columns, handleSettingSummary]);

  useEffect(() => {
    setLoader({ message: '', status: true });
    fetchCompanyTankData()
      .then((res) => {
        appStateDispatcher({ type: 'SET_TANK_DATA', payload: res.Tank.results });
        setLoader({ message: '', status: false });
      })
      .catch((err) => {
        setLoader({ message: '', status: false });
        toast.error(err.message);
      });
  }, []);

  const handleSubmttingFuelPurchase = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const itemsList = rows.map((it) => {
      const { tax_rate, expected_quantity, price,
        tank: tankValue, dip_quantity_before_offloading,
        sales_quantity_during_offloading,
        actual_dip_quantity_after_offloading,
        variance
      } = it;
      const tax_amount = GetGross(it, 'tax_rate', 'expected_quantity', 'price', 'tax_amount');
      const net_payable = it.expected_quantity * it.price;
      const gross_amount = GetGross(it, 'tax_rate', 'expected_quantity', 'price', 'gross_amount');
      const tax = Number(tax_rate) / 100;
      const tank = Number(tankValue.split('-')[0]);
      return {
        tax_rate: tax,
        expected_quantity,
        price, tank, tax_amount,
        net_payable, gross_amount,
        dip_quantity_before_offloading,
        sales_quantity_during_offloading,
        actual_dip_quantity_after_offloading,
        variance
      };
    });

    itemsList.forEach((item) => {
      if (!ObjectValidator([
        'tax_rate',
        'expected_quantity',
        'price',
        'dip_quantity_before_offloading',
        'net_payable',
        'gross_amount',
        'sales_quantity_during_offloading',
        'actual_dip_quantity_after_offloading',
        'tank',
        'tax_amount',
        'variance',

      ], item)) {
        toast.error("Please check your items table and complete before you submit again");
      }
    });
    const pickedDate = YearMonthDate(billDate.current.value);
    const { organization_id } = account.user;
    const payload = {
      vendor: vendor,
      officer: selectedOfficer,
      bill_number: billNumberRef.current.value,
      purchase_date: pickedDate,
      po_number: purchaseOrderNumberRef.current.value,
      invoice_number: invoiceNumberRef.current.value,
      delivery_note_number: deliveryNoteNumberRef.current.value,
      items: itemsList,
      sub_total_tax_amount: summaryValues.subtotal,
      net_payable: summaryValues.taxt_amount_total,
      gross_amount: summaryValues.total,
      organization_id,
      transport_name: transportNameRef.current.value,
      vehicle_registration: vehicleRegistrationRef.current.value,
      driver_name: driverNameRef.current.value
    };
    console.log(payload);
    for (const prop in payload) {
      if (!payload[prop]) { toast.error("Invalid payload, Cross check your item and submit again!"); return };
    }
    setLoader({ message: 'Posting fuel purchase', status: true });
    postingFuelPurchase(payload)
      .then((res) => {
        setLoader({ message: '', status: false });
        toast.success('Purchase item created successfully');
        navigate(`/dashboard/purchases/bills?type=items`);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoader({ message: '', status: false });
      })
  }

  return (
    <section className="newfuelpurchase">
      <shared.components.SectionIntroduction text="New Fuel Purchase" />
      <Form>
        <shared.components.BillingComponent
          cardLabelView={cardLabelView}
          ref={billingInfoRefObject}
          handleSelectedVendor={handleSelectedVendor}
          vendorsList={vendors}
        >
          <NewVendor />
        </shared.components.BillingComponent>
        <Transport
          officers={officers}
          handleSelectedOficer={handleSelectedOficer}
          ref={transportRefObject}
        />
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
        <SummaryComponent subtotal={summaryValues.subtotal} totalTaxAmount={summaryValues.taxt_amount_total} total={summaryValues.total} />
        <FormButtonRow className="form_actions" methodHandler={handleSubmttingFuelPurchase} />
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
