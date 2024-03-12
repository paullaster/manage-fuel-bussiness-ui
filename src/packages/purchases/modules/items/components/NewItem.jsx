import { useContext, useEffect, useMemo, useRef, useState } from "react";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState, LoadingContext, AuthContext } from '@/store';
import { composableAutofils } from "../setups";
import PurchaseItemEntry from "./PurchaseItemEntry";
import { MdDelete, MdOutlineSaveAlt, MdCancel, MdCreate } from "react-icons/md";
import NewVendor from "../../vendors/components/NewVendor";
import {
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import DataGridToolbar from "../../../shared/components/DataGridToolbar";
import OfficerComponent from "./OfficerComponent";
import SummaryComponent from "../../../shared/components/SummaryComponent";
import { ObjectValidator, GetGross, YearMonthDate } from "@/utils";
import { fetchItemsList, postingPurchaseItem } from "../../../actions";
import { usePurchasesState, usePurchasesDispatcher } from '../../../Context';
import { toast } from 'react-toastify';
import { useNavigate, Form } from 'react-router-dom';

const NewItem = () => {
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  const purchaseActions = usePurchasesDispatcher();
  const { bills_items } = usePurchasesState();
  const { account } = useContext(AuthContext);
  const { setLoader } = useContext(LoadingContext);
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [summaryValues, setSummaryValues] = useState({ subtotal: 0, taxt_amount_total: 0, total: 0 });
  const [selectedOfficer, setSelectedOfficer] = useState(null);
  const [vendor, setVendor] = useState(null);

  const billNumberRef = useRef(null);
  const invoiceNumberRef = useRef(null);
  const purchaseOrderNumberRef = useRef(null);
  const deliveryNoteNumberRef = useRef(null);
  const billDate = useRef(null);


  const { vendors, officers } = usePurchasesState();

  const billingInfoRefObject = {
    billNumberRef,
    invoiceNumberRef,
    purchaseOrderNumberRef,
    deliveryNoteNumberRef,
    billDate,
  };

  const handleSelectedVendor = (event, newValue) => {
    event.preventDefault();
    event.stopPropagation();
    setVendor(newValue.vendor_id);
  }

  const handleSelectedOficer = (event, newValue) => {
    event.stopPropagation();
    event.preventDefault();
    setSelectedOfficer(newValue.id);
  }



  const deleteItem = (item) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== item.id));
  };


  const handleEditClick = (item) => {
    setRowModesModel({ ...rowModesModel, [item.id]: { mode: GridRowModes.Edit } });
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


  const columns = useMemo(
    () => [
      {
        field: 'item',
        headerName: 'Item',
        width: 200,
        type: 'singleSelect',
        valueOptions: () => bills_items.map((item) => {
          return `${item.id}-${item.item_name}`
        }),
        valueFormatter: (params) => {
          if (params.value) {
            const name = params.value.split('-')[1];
            return `${name}`;
          }
        },
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
        valueGetter: (params) => {
          if (params.row.item) {
            const item = bills_items.find((t) => t.id === Number(params.row.item.split('-')[0]));
            return `${item.selling_price}`;
          }
        },
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
        valueFormatter: (params) => {
          if (params.value === null) {
            return '0%';
          }
          return `${params.value.toLocaleString()} %`;
        }
      },
      {
        field: 'vat_amount',
        headerName: 'Tax amount',
        width: 120,
        editable: false,
        valueGetter: (params) => GetGross(params.row, 'vat_rate', 'quantity', 'price', 'tax_amount'),
        hideable: false,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'net_amount',
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
              icon={<MdCreate />}
              label="Edit"
              onClick={() => handleEditClick(params)}
            />,
            <GridActionsCellItem
              key={uuidv4()}
              icon={<MdDelete />}
              label="Delete"
              onClick={() => deleteItem(params)}
            />,
          ]
        },
        hideable: false,
      },
    ],
    [handleSaveClick, handleCancelClick, handleEditClick, deleteItem],
  );

  const handleSettingSummary = useMemo(() => {
    if (rows.length) {
      const subtotal = rows.reduce((cummulative, current) => {
        const sub = current.quantity * current.price;
        return cummulative + sub;
      }, summaryValues.subtotal);
      const totalTaxAmount = rows.reduce((cummulative, current) => {
        const txA = GetGross(current, 'vat_rate', 'quantity', 'price', 'tax_amount');
        return cummulative + txA
      }, summaryValues.taxt_amount_total);
      const total = subtotal + totalTaxAmount;
      return setSummaryValues({ subtotal: subtotal, taxt_amount_total: totalTaxAmount, total: total });
    }
    return setSummaryValues({ subtotal: 0, taxt_amount_total: 0, total: 0 });
  }, [rows]);

  useEffect(() => {

    setLoader({ message: '', status: true });
    fetchItemsList()
      .then((res) => {
        purchaseActions({ type: 'SET_BILL_ITEMS', payload: { filter: true, items: res.Items.results } })
        setLoader({ message: '', status: false });
      }, [])
      .catch((err) => {
        setLoader({ message: '', status: false });
        toast.error(err.message);
      });
  }, []);

  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  useEffect(() => {

  }, [columns, handleSettingSummary]);


  const handleSubmitPurchaseItem = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const itemsList = rows.map((it) => {
      const { vat_rate, quantity, price: purchase_price, item: itemValue } = it;
      const tax_amount = GetGross(it, 'vat_rate', 'quantity', 'price', 'tax_amount');
      const net_amount = it.quantity * it.price;
      const gross_amount = GetGross(it, 'vat_rate', 'quantity', 'price', 'gross_amount');
      const tax = Number(Math.ceil(vat_rate)) / 100;
      const item = itemValue.split('-')[0];
      return { tax, quantity, purchase_price, item, tax_amount, net_amount, gross_amount };
    });

    itemsList.forEach((item) => {
      if (!ObjectValidator(['vat_rate', 'quantity', 'price', 'item', 'vat_amount', 'net_amount', 'gross_amount'], item)) {
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
      purchase_order_number: purchaseOrderNumberRef.current.value,
      invoice_number: invoiceNumberRef.current.value,
      delivery_note_number: deliveryNoteNumberRef.current.value,
      items: itemsList,
      sub_total_vat_amount: summaryValues.subtotal,
      net_amount: summaryValues.taxt_amount_total,
      gross_amount: summaryValues.total,
      organization_id,

    };

    for (const prop in payload) {
      if (!payload[prop]) {toast.error("Invalid payload, Cross check your item and submit again!"); return;};
    }
    setLoader({message:'Posting purchase item', status: true});
    postingPurchaseItem(payload)
      .then((res) => {
        setLoader({message:'', status: false});
        toast.success('Purchase item created successfully');
        navigate(`/dashboard/purchases/bills?type=items`);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoader({message:'', status: false});
      });
  }


  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purchase item" />
      <Form method="post">
        <shared.components.BillingComponent
          cardLabelView={cardLabelView}
          ref={billingInfoRefObject}
          handleSelectedVendor={handleSelectedVendor}
          vendorsList={vendors}
        >
          <NewVendor />
        </shared.components.BillingComponent >
        <OfficerComponent officers={officers} handleSelectedOficer={handleSelectedOficer} />
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
        <SummaryComponent subtotal={summaryValues.subtotal} totalTaxAmount={summaryValues.taxt_amount_total} total={summaryValues.total} />
        <FormButtonRow className='form_actions_wide' methodHandler={handleSubmitPurchaseItem} />
      </Form>
    </section>
  )
}

export default NewItem