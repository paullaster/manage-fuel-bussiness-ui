
import FuelPurchaseEntry from "./FuelPurchaseEntry"
import DivisionTopBar from "../../../shared/components/DivisionTopBar"
const TankEntries = ({columns, rows, rowModesModel = {}, handleRowModesModelChange = () => {}, handleRowEditStop = () => {}, processRowUpdate = () => {}, slots = {}, slotProps = {}}) => {
    return (
        <div className="tankEntries">
            <DivisionTopBar sectionTitle="Tank entry information">
            </DivisionTopBar>
            <div>
                <FuelPurchaseEntry 
                columns={columns} 
                rows ={rows} 
                rowModesModel={rowModesModel}
                handleRowModesModelChange={handleRowModesModelChange}
                handleRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots = {slots} 
                slotProps = {slotProps}
                />
            </div>
        </div>
    )
}

export default TankEntries