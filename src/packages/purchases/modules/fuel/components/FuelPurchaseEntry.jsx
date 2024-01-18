import { DataTable } from "@/components";
const FuelPurchaseEntry = ({columns, rows, rowModesModel = {}, slots = {}, slotProps = {}}) => {
  return (
    <DataTable
      columns={columns}
      rows={rows}
      rowModesModel={rowModesModel}
      slots={slots}
      slotProps={slotProps}
    />
  )
}

export default FuelPurchaseEntry