import InvoiceDetails from "./InvoiceDetails";
import shared from "..";
import DivisionTopBar from "./DivisionTopBar";
import { forwardRef } from "react";

const BillingComponent = forwardRef((props, ref) => {
    const { cardLabelView = [], handleSelectedVendor, vendorsList, optionField, children } = props;
    return (
        <div className="billingCard">
            <DivisionTopBar sectionTitle="Billing details that appear in your bill " />
            <div className="billing">
                {
                    cardLabelView.length ? 
                    cardLabelView.slice(0, 1).map((card) => {
                        return (
                            <shared.components.AddItem
                                keyField='name'
                                label={card.name}
                                cardLabelIcon={card.CustomCardLabelIcon}
                                key={card.card}
                                cardView={card.cardView}
                                addItemView={card.addItemView}
                                id={card.card}
                                vendorsList={vendorsList}
                                handleSelectedVendor={handleSelectedVendor}
                                optionField={optionField}
                            >
                                {children}
                            </shared.components.AddItem>
                        )
                    }) : ''
                }
                <InvoiceDetails ref={ref}/>
            </div>
        </div>
    )
})

export default BillingComponent