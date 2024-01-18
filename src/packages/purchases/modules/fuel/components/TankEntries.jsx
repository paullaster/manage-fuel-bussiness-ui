
import FuelPurchaseEntry from "./FuelPurchaseEntry"
import AddItemButton from "../../../shared/components/AddItemButton"
import DivisionTopBar from "../../../shared/components/DivisionTopBar"
const TankEntries = ({columns, rows, slots = {}, slotProps = {}}) => {
    return (
        <div className="tankEntries">
            <DivisionTopBar sectionTitle="Tank entry information">
                <AddItemButton btnCaption="Add Entry" />
            </DivisionTopBar>
            <div>
                <FuelPurchaseEntry columns={columns} rows ={rows} slots = {slots} slotProps = {slotProps}/>
            </div>
        </div>
    )
}

export default TankEntries