import {
  GridActionsCellItem,
  GridRowModes,
  GridToolbarContainer,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
const DataGridToolbar = ({ setRows, setRowModesModel, methodHandler = () => {} }) => {
  const { } = prop;

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={methodHandler}>
        Add record
      </Button>
    </GridToolbarContainer>
  )
}

export default DataGridToolbar