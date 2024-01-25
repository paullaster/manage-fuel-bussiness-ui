import { DataTable } from "@/components";
const FuelPurchaseEntry = ({
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
    <DataTable
      columns={columns}
      rows={rows}
      rowModesModel={rowModesModel}
      handleRowModesModelChange={handleRowModesModelChange}
      handleRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      slots={slots}
      slotProps={slotProps}
    />
  )
}

export default FuelPurchaseEntry