import InvoiceDetails from "./InvoiceDetails";
import shared from "..";
import DivisionTopBar from "./DivisionTopBar";

const BillingComponent = ({ cardLabelView = [] }) => {
    return (
        <div className="billingCard">
            <DivisionTopBar sectionTitle="Billing details that appear in your bill "/>
            <div className="billing">
                {
                    cardLabelView.length && cardLabelView.slice(0, 1).map((card) => {
                        return <shared.components.AddItem  key ='name' label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card} />
                    })
                }
                <InvoiceDetails />
            </div>
        </div>
    )
}

export default BillingComponent