import { useEffect } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { Form } from "react-router-dom";
import { composableAutofils } from "../setups";
import { Button } from "@/components";
import TankEntries from "./TankEntries";
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
        <shared.components.BillingComponent cardLabelView={cardLabelView} />
        <TransportationAndOfficer cardLabelView={cardLabelView} />
        <TankEntries />
        
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
