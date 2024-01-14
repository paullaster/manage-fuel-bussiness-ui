import shared from "../../../shared";
import DivisionTopBar from '../../../shared/components/DivisionTopBar'
import Transport from './Transport'

const TransportationAndOfficer = ({ cardLabelView }) => {
    return (
        <div className="TransportationAndOfficerCard">
            <DivisionTopBar sectionTitle='Tranposrt and Officer Information'>
            </DivisionTopBar>
            <div className='transport_and_officer'>
                <Transport />
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
                                
                            >
                                {children}
                            </shared.components.AddItem>
                        )
                    }) : ''
                }
            </div>
        </div>
    )
}

export default TransportationAndOfficer