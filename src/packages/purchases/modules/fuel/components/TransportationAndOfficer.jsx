import shared from "../../../shared";
import DivisionTopBar from './DivisionTopBar'
import Transport from './Transport'

const TransportationAndOfficer = ({ cardLabelView }) => {
    return (
        <div>
            <DivisionTopBar sectionTitle='Tranposrt and Officer Information'>
            </DivisionTopBar>
            <div className='transport_and_officer'>
                <Transport />
                {
                    cardLabelView.length && cardLabelView.slice(1, 2).map((card) => {
                        return <shared.components.AddItem label={card.name} cardLabelIcon={card.CustomCardLabelIcon} key={card.card} cardView={card.cardView} addItemView={card.addItemView} id={card.card} />
                    })
                }
            </div>
        </div>
    )
}

export default TransportationAndOfficer