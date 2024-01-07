import { purchaseEntryColumns } from "../setups";
import { DataTable } from "@/components";
const FuelPurchaseEntry = () => {
  return (
    <DataTable
      style={{ height: auto, width: '100%' }}
      columns={purchaseEntryColumns}
      rows={[]}

    />
  )
}

export default FuelPurchaseEntry