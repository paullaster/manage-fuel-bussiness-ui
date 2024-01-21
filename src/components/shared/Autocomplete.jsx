import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteComponent = ({list, label, keyField, }) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          id={label}
          freeSolo
          options={list.map((option) => option[keyField])}
          renderInput={(params) => <TextField {...params} label={label} />}
          />
    </div>
  )
}

export default AutocompleteComponent