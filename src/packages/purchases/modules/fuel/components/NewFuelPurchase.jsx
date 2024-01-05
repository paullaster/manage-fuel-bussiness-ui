import { useState, useEffect } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import Transport from "./Transport";
import { Form } from "react-router-dom";
import { composableAutofils } from "../setups";
import SaleItem from "./SaleItem";





const NewFuelPurchase = () => {

  const [tankData, setTankData] = useState([]);
  const [taxData, setTaxData] = useState([]);

  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();

  useEffect(() => {
    appStateDispatcher({type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils});
  }, []);

  const handleAddNewTaxData = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.type === 'click') {
      const options = [
        {
          prop: 'quantity',
          type: 'number',
          placeholder: " quantity",
        },
        {
          prop: 'price',
          type: 'number',
          placeholder: "price",
        },
        {
          prop: 'gross_amount',
          type: 'number',
          placeholder: "gross amount",
        },
        {
          prop: 'tax_rate',
          type: 'number',
          placeholder: "tax rate",
        },
        {
          prop: 'tax_amount',
          type: 'number',
          placeholder: "tax amount",
        },
        {
          prop: 'net_payable',
          type: 'number',
          placeholder: "net payable",
        },
      ];

      const styleProp = {
        display: "grid",
        gridTemplateColumns: "16% 16% 16% 16% 16% 12%",
        columnGap: "1.2rem",
        padding: '2.0rem 0',
        borderBottom: ".1rem solid #5f6c921e",
      }
      setTaxData(prev => prev = [...prev, <shared.components.NewConstruct options={options} style={styleProp} />]);
    }
  }

  return (
    <section className="newfuelpurchase">
      <shared.components.SectionIntroduction text="New Fuel Purchase" />
      <Form>
        <div className="form">
          <div className="composableAutofils">
            {
              cardLabelView.length && cardLabelView.slice(0, 2).map( (card) => {
                return <shared.components.AddItem label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card}/>
              })
            }
          </div>
          
          <Transport />
          <div className="taxdata">
            <div className="headers">
              <div><span>quantity</span></div>
              <div><span>price</span></div>
              <div><span>gross amount</span></div>
              <div><span>tax rate</span></div>
              <div><span>tax amount</span></div>
              <div><span>net payable</span></div>
            </div>
            <div className="item">
              {
                taxData.length > 0 && taxData.map(nt => nt)
              }
              <shared.components.AddItemButton methodHandler={handleAddNewTaxData} btnCaption="add tax" />
            </div>
          </div>
          <div className="composableAutofils">
            {
              cardLabelView.length && cardLabelView.slice(2, 4).map((card) => {
                return <shared.components.AddItem label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card}  />
              })
            }
          </div>
        </div>
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
