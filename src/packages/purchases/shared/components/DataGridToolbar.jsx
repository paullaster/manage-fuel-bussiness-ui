import {
  GridRowModes,
  GridToolbarContainer
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';


const tableRowInitialValues = {
  vat_rate: '0',
  quantity: '0',
  price: '0',
};


const DataGridToolbar = ({ setRows, setRowModesModel }) => {

  const handleClick = () => {
    const id = uuidv4();
    setRows(
      (oldRows) => [...oldRows, {id, ...tableRowInitialValues, isNew: true }]
    );
    setRowModesModel(
      (oldRowModel) => ({
        ...oldRowModel,
        [id]: {mode: GridRowModes.Edit, FieldToFocus: 'item'},
      })
    );
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Record
      </Button>
    </GridToolbarContainer>
  )
}

export default DataGridToolbar