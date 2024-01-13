import { useEffect, useMemo, useState } from "react";
import { Form } from "react-router-dom";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { composableAutofils, purchaseEntryColumns } from "../setups";
import PurchaseItemEntry from "./PurchaseItemEntry";
import {v4 as uuidv4 } from 'uuid';
import { ArrayFunctions } from "@/utils";

const NewItem = () => {
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  const [tableDataRows, setTableDataRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const tableRowInitialValues = {
    vat_rate: 'VAT rate',
    quantity: 'Quantity',
    price: 'Price',
  };

  useMemo(() =>{

  }, [tableDataRows])

  const handleAddNewItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setTableDataRows((prev) => [...prev, {id: uuidv4(), ...tableRowInitialValues}]);
  };

  const handleDeletingLineItem = (event, item) => {
    event.stopPropagation();
    event.preventDefault();
    setTableDataRows((prev) => prev.filter((line) => line.id !== item.id));
  }


  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
    setColumns(
      ArrayFunctions({
      arrKey: 'field', 
      itemKey: 'field', 
      item: {field: 'action'}, 
      propToUpdate: 'renderCell', 
      update: (params)=> <shared.components.FormAction row = {params} onDelete = {handleDeletingLineItem} />,
      type: 'map',
    }, purchaseEntryColumns))
  }, []);

  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purchase item" />
      <Form method="post">
        <shared.components.BillingComponent cardLabelView={cardLabelView} />
        <PurchaseItemEntry  columns = {columns} rows={tableDataRows} handleAddNewItem={handleAddNewItem}/>
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewItem