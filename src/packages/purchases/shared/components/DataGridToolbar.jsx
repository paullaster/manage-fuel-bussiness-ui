import {
  GridActionsCellItem,
  GridRowModes,
  GridToolbarContainer,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
const DataGridToolbar = ({ setRows, setRowModesModel, buttonLabel }) => {

  const handleClick = () => {

  }
  
  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        {buttonLabel}
      </Button>
    </GridToolbarContainer>
  )
}

export default DataGridToolbar