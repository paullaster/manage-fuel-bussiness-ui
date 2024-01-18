import { 
    GridActionsCellItem,
    GridRowModes,
    GridToolbarContainer,
    GridRowEditStopReasons
   } from '@mui/x-data-grid';
import Button from './Button';
import { MdAdd } from "react-icons/md";

const DataGridToolbar = ({methodHandler}) => {
  return (
    <GridToolbarContainer>
        <Button onClick={methodHandler}>
                <span><MdAdd size={20} /></span>
                <span>{btnCaption}</span>
            </Button>
    </GridToolbarContainer>
  )
}

export default DataGridToolbar