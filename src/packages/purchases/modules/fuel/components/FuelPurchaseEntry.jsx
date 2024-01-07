import { purchaseEntryColumns } from "../setups";
import { DataTable } from "@/components";
const FuelPurchaseEntry = () => {
  return (
    <DataTable
      columns={purchaseEntryColumns}
      rows={[]}

    />
  )
}

export default FuelPurchaseEntry