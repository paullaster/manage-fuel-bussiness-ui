import InvoiceDetails from "./InvoiceDetails";
import shared from "../../../shared";
import DivisionTopBar from "./DivisionTopBar";

const BillingComponent = ({ cardLabelView }) => {
    return (
        <div>
            <DivisionTopBar sectionTitle="Billing "/>
            <div className="billing">
                {
                    cardLabelView.length && cardLabelView.slice(0, 1).map((card) => {
                        return <shared.components.AddItem label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card} />
                    })
                }
                <InvoiceDetails />
            </div>
        </div>
    )
}

export default BillingComponent