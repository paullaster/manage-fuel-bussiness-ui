import { useEffect } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import Transport from "./Transport";
import { Form } from "react-router-dom";
import { composableAutofils } from "../setups";
import { Button } from "@/components";
import InvoiceDetails from "./InvoiceDetails";
import TankEntries from "./TankEntries";
import BillingComponent from "./BillingComponent";
import TransportationAndOfficer from "./TransportationAndOfficer";




const NewFuelPurchase = () => {

  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();

  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  return (
    <section className="newfuelpurchase">
      <shared.components.SectionIntroduction text="New Fuel Purchase" />
      <Form>
          <BillingComponent cardLabelView={cardLabelView}/>
          <TransportationAndOfficer cardLabelView={cardLabelView} />
          <TankEntries />
          <div className="form_actions">
            <Button type="button" className={'btn-element'}> cancel </Button>
            <Button type="submit" className={'btn-element btn_primary'}> save </Button>
          </div>
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
