import { purchaseEntryColumns } from "../setups";
import { DataTable } from "@/components";

const ItemData = () => {
  return (
    <DataTable
    columns={purchaseEntryColumns}
    rows={[]}

  />
  )
}

export default ItemData