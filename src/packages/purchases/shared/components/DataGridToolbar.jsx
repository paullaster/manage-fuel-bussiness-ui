import {
  GridActionsCellItem,
  GridRowModes,
  GridToolbarContainer,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
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