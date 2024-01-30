import { useEffect, useMemo, useRef, useState } from "react";
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
import { v4 as uuidv4 } from 'uuid';
import DataGridToolbar from "../../../shared/components/DataGridToolbar";
import OfficerComponent from "./OfficerComponent";
import SummaryComponent from "../../../shared/components/SummaryComponent";
import { ObjectValidator, GetGross } from "@/utils";
import { postingPurchaseItem } from "../../../actions";


const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);

const NewItem = () => {
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [summaryValues, setSummaryValues] = useState({ subtotal: 0, taxt_amount_total: 0, total: 0 });
  const [vendorsList, setVendorsList] = useState([{ id: 1, name: 'Vendor X' }, { id: 2, name: 'Vendor Y' }, { id: 3, name: 'Vendor Z' }]);
  const [officers, setOfficers] = useState([{ id: 1, name: 'Ken Mjungu' }, { id: 2, name: 'Waigah Mwaura' }]);
  const [selectedOfficer, setSelectedOfficer] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [pickedDate, setPickedDate] = useState(null);

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


  const handlePcikedDate = (newValue) => {
    const selectedDate = new Date(newValue.$d).toISOString();
    setPickedDate(selectedDate);
  }

  const handleSelectedVendor = (event, newValue) => {
    event.preventDefault();
    event.stopPropagation();
    setVendor(newValue.id);
  }

  const handleSelectedOficer = (event, newValue) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(newValue);
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
    console.log({ rows: rows });
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
        valueOptions: () => orgData.items.map((item) => {
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
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  useEffect(() => {

  }, [columns, handleSettingSummary]);


  const handleSubmitPurchaseItem = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const itemsList = rows.map((it) => {
      const{ vat_rate, quantity, price:purchase_price , item } = it;
      const tax_amount = GetGross(it, 'vat_rate', 'quantity', 'price', 'tax_amount');
      const net_amount = it.quantity * it.price;
      const gross_amount = GetGross(it, 'vat_rate', 'quantity', 'price', 'gross_amount');
      const tax = Number(vat_rate)/100;
      return { tax, quantity, purchase_price, item, tax_amount, net_amount, gross_amount};
    });

    itemsList.forEach((item) => {
      if (!ObjectValidator(['vat_rate', 'quantity', 'price', 'item', 'vat_amount', 'net_amount', 'gross_amount'], item)) {
        throw Error("Please check your table items and complete before you submit again");
      }
    });
    console.log(orgData);
    const { organization_id } = orgData;
    const payload = {
      vendor: vendor,
      officer: selectedOfficer,
      bill_number: billNumberRef.current.value,
      purchase_date: pickedDate,
      purchase_order_number: purchaseOrderNumberRef.current.value,
      invoice_number: invoiceNumberRef.current.value,
      delivery_note_number: deliveryNoteNumberRef.current.value,
      items: itemsList,
      total_amount: summaryValues.total,
      organization_id,

    };

    for (const prop in payload) {
      console.log(payload);
      if (!payload[prop]) throw new Error("Invalid payload, Cross check your item and submit again!")
    }
    postingPurchaseItem(payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
  }


  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purchase item" />
      <Form method="post">
        <shared.components.BillingComponent
          cardLabelView={cardLabelView}
          ref={billingInfoRefObject}
          handleSelectedVendor={handleSelectedVendor}
          vendorsList={vendorsList}
        >
          <NewVendor />
        </shared.components.BillingComponent>
        <OfficerComponent officers={officers} handleSelectedOficer={handleSelectedOficer} setValue={handlePcikedDate} />
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