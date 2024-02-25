import DivisionTopBar from "../../../shared/components/DivisionTopBar"
import ItemData from "./ItemData"

const PurchaseItemEntry = ({
    columns,
    rows,
    rowModesModel = {},
    handleRowModesModelChange = () => { },
    handleRowEditStop = () => { },
    processRowUpdate = () => { },
    slots = {},
    slotProps = {}
}) => {
  return (
        <div className="tankEntries">
            <DivisionTopBar sectionTitle="Purcahse item details" />
            <div>
                <ItemData
                columns={columns}
                rows={rows}
                rowModesModel={rowModesModel}
                handleRowModesModelChange={handleRowModesModelChange}
                handleRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={slots}
                slotProps={slotProps}
                />
            </div>
        </div>
    )
}

export default PurchaseItemEntry