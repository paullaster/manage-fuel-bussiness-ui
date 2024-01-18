import {
  GridActionsCellItem,
  GridRowModes,
  GridToolbarContainer,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
const DataGridToolbar = ({ setRows, setRowModesModel, methodHandler = () => {}, buttonLabel }) => {

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={methodHandler}>
        {buttonLabel}
      </Button>
    </GridToolbarContainer>
  )
}

export default DataGridToolbar