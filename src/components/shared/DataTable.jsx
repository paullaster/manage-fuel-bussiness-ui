import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    initialState = { pagination: { paginationModel: { page: 0, pageSize: 5 }, } },
    pageSizeOptions = [5, 10],
    ...args
}) => {
    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={initialState}
                pageSizeOptions={pageSizeOptions}
                {...args}
            />
        </div>
    )
}

export default DataTable