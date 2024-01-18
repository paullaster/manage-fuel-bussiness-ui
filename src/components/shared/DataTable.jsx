import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    rowModesModel = {},
    handleRowModesModelChange = () => {},
    handleRowEditStop = () => {},
    processRowUpdate = () => {},
    slots = { },
    slotProps = {},
    style = { height: 400, width: '100%' },
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