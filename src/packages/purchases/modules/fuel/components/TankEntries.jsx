import { Button } from "@/components"
import FuelPurchaseEntry from "./FuelPurchaseEntry"
import AddItemButton from "../../../shared/components/AddItemButton"
const TankEntries = () => {
    return (
        <div>
            <div>
                <div>Tank Entries</div>
                <AddItemButton btnCaption="Add Tank Entry"/>
            </div>
            <div>
                <FuelPurchaseEntry />
            </div>
        </div>
    )
}

export default TankEntries