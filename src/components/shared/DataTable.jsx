import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    style = { height: 200, width: '100%' },
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