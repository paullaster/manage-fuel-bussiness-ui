import { useEffect, useMemo, useState, useCallback } from "react";
import { Form } from "react-router-dom";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { composableAutofils } from "../setups";
import PurchaseItemEntry from "./PurchaseItemEntry";
import { apiFetchUtil, GetGross } from "@/utils";
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";
import { GridActionsCellItem } from '@mui/x-data-grid';
import { MdDelete } from "react-icons/md";

const tableRowInitialValues = {
  vat_rate: '0',
  quantity: '0',
  price: '0',
};
const NewItem = () => {
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  const [rows, setRows] = useState([]);


  const tanks = WebStorage.GetFromWebStorage('session', APPNAME).tanks;

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
        field: 'item',
        headerName: 'Item',
        width: 200,
        type: 'singleSelect',
        valueOptions: () => tanks.map((tank) => {
          return `tank ${tank.tank_number}`
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
        getActions: (params) => [
          <GridActionsCellItem
            key={uuidv4()}
            icon={<MdDelete size={25} />}
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
    setRows((prev) => [...prev, { id: uuidv4(), ...tableRowInitialValues }]);
  };

  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purchase item" />
      <Form method="post">
        <shared.components.BillingComponent cardLabelView={cardLabelView} />
        <PurchaseItemEntry columns={columns} rows={rows} handleAddNewItem={handleAddNewItem} />
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewItem