import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows, columns, initialState: {} }) => {
  return (
    <div>
        <DataGrid 
        rows={rows}
        columns={columns}
        initialState={initialState}
        />
    </div>
  )
}

export default DataTable