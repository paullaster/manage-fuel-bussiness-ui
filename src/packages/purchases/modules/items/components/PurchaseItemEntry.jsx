import AddItemButton from "../../../shared/components/AddItemButton"
import DivisionTopBar from "../../../shared/components/DivisionTopBar"
import ItemData from "./ItemData"

const PurchaseItemEntry = () => {
  return (
        <div className="tankEntries">
            <DivisionTopBar sectionTitle="Purcahse item details">
                <AddItemButton btnCaption="Add item"/>
            </DivisionTopBar>
            <div>
                <ItemData />
            </div>
        </div>
    )
}

export default PurchaseItemEntry