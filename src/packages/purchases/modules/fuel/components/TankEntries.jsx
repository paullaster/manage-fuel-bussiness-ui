
import FuelPurchaseEntry from "./FuelPurchaseEntry"
import AddItemButton from "../../../shared/components/AddItemButton"
import DivisionTopBar from "./DivisionTopBar"
const TankEntries = () => {
    return (
        <div className="tankEntries">
            <DivisionTopBar sectionTitle="Tank Entries">
                <AddItemButton btnCaption="Add Tank Entry"/>
            </DivisionTopBar>
            <div>
                <FuelPurchaseEntry />
            </div>
        </div>
    )
}

export default TankEntries