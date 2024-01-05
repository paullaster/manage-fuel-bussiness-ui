import { useEffect } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import Transport from "./Transport";
import { Form } from "react-router-dom";
import { composableAutofils } from "../setups";
import SaleItem from "./SaleItem";
import { Button } from "@/components";
import TaxItem from "./TaxItem";





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
          <div className="composableAutofils">
            {
              cardLabelView.length && cardLabelView.slice(0, 2).map((card) => {
                return <shared.components.AddItem label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card} />
              })
            }
          </div>
          <SaleItem />
          <Transport />
          <TaxItem />
          <div className="composableAutofils">
            {
              cardLabelView.length && cardLabelView.slice(2, 4).map((card) => {
                return <shared.components.AddItem label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card} />
              })
            }
          </div>
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
