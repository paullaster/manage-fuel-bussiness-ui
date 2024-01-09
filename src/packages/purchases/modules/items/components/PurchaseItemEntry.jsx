import FuelPurchaseEntry from "./FuelPurchaseEntry"
import AddItemButton from "../../../shared/components/AddItemButton"
import DivisionTopBar from "../../../shared/components/DivisionTopBar"

const PurchaseItemEntry = () => {
  return (
        <div className="tankEntries">
            <DivisionTopBar sectionTitle="Purcahse item details">
                <AddItemButton btnCaption="Add item"/>
            </DivisionTopBar>
            <div>
                <FuelPurchaseEntry />
            </div>
        </div>
    )
}

export default PurchaseItemEntry