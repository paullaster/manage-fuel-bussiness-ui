import { useEffect } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import Transport from "./Transport";
import { Form } from "react-router-dom";
import { composableAutofils } from "../setups";
import SaleItem from "./SaleItem";
import { Button } from "@/components";
import TaxItem from "./TaxItem";
import InvoiceDetails from "./InvoiceDetails";





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
        <div className="form">
          <fieldset className="fuelPurchaseFieldSet">
            <legend>Vendor & product</legend>
            <div className="composableAutofils">
              {
                cardLabelView.length && cardLabelView.slice(0, 2).map((card) => {
                  return <shared.components.AddItem label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card} />
                })
              }
            </div>
          </fieldset>
          <fieldset className="fuelPurchaseFieldSet">
            <legend>Sales entry</legend>
            <SaleItem />
          </fieldset>
          <fieldset className="fuelPurchaseFieldSet">
            <legend>Transportation</legend>
            <Transport />
          </fieldset>
          <fieldset className="fuelPurchaseFieldSet">
            <legend>Add tax</legend>
            <TaxItem />
          </fieldset>
          <fieldset className="fuelPurchaseFieldSet">
            <legend>Invoice & officer</legend>
            <div className="composableAutofils">
              {
                cardLabelView.length && cardLabelView.slice(3, 4).map((card) => {
                  return <shared.components.AddItem label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card} />
                })
              }
            </div>
          </fieldset>
          <InvoiceDetails />
          <div className="form_actions">
            <Button type="button" className={'btn-element'}> cancel </Button>
            <Button type="submit" className={'btn-element btn_primary'}> save </Button>
          </div>
        </div>
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
