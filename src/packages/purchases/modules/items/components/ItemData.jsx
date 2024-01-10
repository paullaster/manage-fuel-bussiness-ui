import { purchaseEntryColumns } from "../setups";
import { DataTable } from "@/components";

const ItemData = ({rows}) => {
  return (
    <DataTable
    columns={purchaseEntryColumns}
    rows={rows}

  />
  )
}

export default ItemData