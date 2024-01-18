import {
  GridActionsCellItem,
  GridRowModes,
  GridToolbarContainer,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
const DataGridToolbar = ({ methodHandler }) => {
  const { setRows, setRowModesModel} = prop;

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={methodHandler}>
        Add record
      </Button>
    </GridToolbarContainer>
  )
}

export default DataGridToolbar