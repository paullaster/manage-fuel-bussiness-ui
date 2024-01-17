import { useEffect, useMemo, useState, useCallback } from "react";
import { Form } from "react-router-dom";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { composableAutofils } from "../setups";
import PurchaseItemEntry from "./PurchaseItemEntry";
import { v4 as uuidv4 } from 'uuid';
import { apiFetchUtil, GetGross } from "@/utils";
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";

const NewItem = () => {
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  const [rows, setRows] = useState([]);

  const tableRowInitialValues = {
    vat_rate: '0',
    quantity: '0',
    price: '0',
  };
  
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
      },
      {
        field: 'fuel_type',
        headerName: 'Fuel Type',
        width: 150,
        editable: false,
        sortable: false,
        type: 'string',
        valueGetter: (params) => (params.row.tank === '' || undefined || null) ? 'No tank selected' : fueType

      },
      {
        field: 'dip_quantity_before_offloading',
        headerName: 'Dip quantity before offloading',
        width: 240,
        editable: true,
      },
      {
        field: 'sales_quantity_during_offloading',
        headerName: 'Sales quantity during offloading',
        width: 240,
        editable: true,
      },
      {
        field: 'actual_dip_quantity_after_offloading',
        headerName: 'Actual dip quantity after offloading',
        width: 240,
        editable: true,
      },
      {
        field: 'expected_quantity',
        headerName: 'Expected quantity',
        width: 130,
        editable: true,
      },
      {
        field: 'variance',
        headerName: 'Variance',
        width: 100,
        editable: true,
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 100,
        editable: true,
      },
      {
        field: 'tax_rate',
        headerName: 'Tax rate',
        width: 80,
        editable: true,
        valueFormatter: (params) => `${params.value}%`,
      },
      {
        field: 'tax_amount',
        headerName: 'Tax amount',
        width: 120,
        editable: false,
        valueGetter: (params) => GetGross(params.row, 'tax_rate', 'expected_quantity', 'price', 'tax_amount')
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
      },
      {
        field: 'gross_amount',
        headerName: 'Gross amount',
        description: 'gross amount',
        sortable: false,
        width: 150,
        valueGetter: (params) => GetGross(params.row, 'tax_rate', 'expected_quantity', 'price', 'gross_amount'),
        type: 'number',
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
      },
    ],
    [deleteItem],
  );

  const handleAddNewItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setRows((prev) => [...prev, { id: uuidv4(), ...tableRowInitialValues }]);
  };

  const handleDeletingLineItem = (event, item) => {
    console.log(item)
    event.stopPropagation();
    event.preventDefault();
    setRows((prev) => prev.filter((line) => line.id !== item.id));
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