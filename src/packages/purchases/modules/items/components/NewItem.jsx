import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { composableAutofils } from "../setups";
import PurchaseItemEntry from "./PurchaseItemEntry";

const NewItem = () => {
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  const [tableDataRows, setTableDataRows] = useState([]);

  const itemsEntryObject = {
    purchase_date: '',
    invoice_number: '',
    delivery_note_number: '',
    vat_rate: '',
    quantity: '',
    price: '',
  };

  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);


  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purchase item" />
      <Form method="post">
        <shared.components.BillingComponent cardLabelView={cardLabelView} />
        <PurchaseItemEntry rows ={tableDataRows} />
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewItem