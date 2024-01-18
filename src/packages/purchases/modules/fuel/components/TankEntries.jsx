
import FuelPurchaseEntry from "./FuelPurchaseEntry"
import DivisionTopBar from "../../../shared/components/DivisionTopBar"
const TankEntries = ({columns, rows, rowModesModel = {}, slots = {}, slotProps = {}}) => {
    return (
        <div className="tankEntries">
            <DivisionTopBar sectionTitle="Tank entry information">
            </DivisionTopBar>
            <div>
                <FuelPurchaseEntry 
                columns={columns} 
                rows ={rows} 
                rowModesModel={rowModesModel}
                slots = {slots} 
                slotProps = {slotProps}
                />
            </div>
        </div>
    )
}

export default TankEntries