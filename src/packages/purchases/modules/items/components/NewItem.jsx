import { useEffect } from "react";
import { Form } from "react-router-dom";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { composableAutofils } from "../setups";
import PurchaseItemEntry from "./PurchaseItemEntry";

const NewItem = () => {
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();

  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);


  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purchase item" />
      <Form method="post">
        <shared.components.BillingComponent cardLabelView={cardLabelView} />
        <PurchaseItemEntry />
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewItem