import { DataTable } from "@/components";
const FuelPurchaseEntry = ({columns, rows, slots = {}, slotProps = {}}) => {
  return (
    <DataTable
      columns={columns}
      rows={rows}
      slots={slots}
      slotProps={slotProps}
    />
  )
}

export default FuelPurchaseEntry