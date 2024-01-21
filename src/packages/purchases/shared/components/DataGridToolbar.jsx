import {
  GridRowModes,
  GridToolbarContainer
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { MdAdd } from "react-icons/md";


const tableRowInitialValues = {
  vat_rate: 0,
  quantity: 0,
  price: 0,
  dip_quantity_before_offloading: 0,
  sales_quantity_during_offloading: 0,
  expected_quantity: 0,
  actual_dip_quantity_after_offloading: 0,
  variance: 0,
  tax_rate: 0,
  tank: 'select tank',
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
        [id]: {mode: GridRowModes.Edit, fieldToFocus: 'price'},
      })
    );
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<MdAdd size={25} />} onClick={handleClick}>
        Add Record
      </Button>
    </GridToolbarContainer>
  )
}

export default DataGridToolbar

const focusField = (name) => {
  return name;
}