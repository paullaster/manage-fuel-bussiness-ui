import { useEffect } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { Form } from "react-router-dom";
import { composableAutofils } from "../setups";
import { Button } from "@/components";
import TankEntries from "./TankEntries";
import TransportationAndOfficer from "./TransportationAndOfficer";
import { MdOutlineSimCardDownload, MdClear } from "react-icons/md";




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
        <div className="form_actions">
          <Button type="button" className={'btn-element'}><span><MdClear size={20}/> </span> <span>cancel</span></Button>
          <Button type="submit" className={'btn-element btn_primary'}> <span><MdOutlineSimCardDownload size={20} /></span> <span>save</span></Button>
        </div>
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
