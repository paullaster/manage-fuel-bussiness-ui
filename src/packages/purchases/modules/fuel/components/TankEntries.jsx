import { Button } from "@/components"
import FuelPurchaseEntry from "./FuelPurchaseEntry"
import AddItemButton from "../../../shared/components/AddItemButton"
import DivisionTopBar from "./DivisionTopBar"
const TankEntries = () => {
    return (
        <div>
            <DivisionTopBar>
                <AddItemButton btnCaption="Add Tank Entry"/>
            </DivisionTopBar>
            <div>
                <FuelPurchaseEntry />
            </div>
        </div>
    )
}

export default TankEntries