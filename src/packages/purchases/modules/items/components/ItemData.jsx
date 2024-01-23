import { DataTable } from "@/components";

const ItemData = ({
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

  />
  )
}

export default ItemData