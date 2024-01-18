import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    style = { height: 400, width: '100%' },
    initialState = { pagination: { paginationModel: { page: 0, pageSize: 5 }, } },
    pageSizeOptions = [5, 10],
    rowModesModel = {},
    handleRowModesModelChange = () => {},
    slots = { },
    slotProps = {},
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
                editMode='row'
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={slots}
                slotProps={slotProps}
            />
        </div>
    )
}

export default DataTable