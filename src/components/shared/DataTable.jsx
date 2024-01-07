import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    style = { height: 400, width: '100%' },
    rows,
    columns,
    initialState = { pagination: { paginationModel: { page: 0, pageSize: 5 }, } },
    pageSizeOptions = [5, 10],
    ...args
}) => {
    return (
        <div style={style}>
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