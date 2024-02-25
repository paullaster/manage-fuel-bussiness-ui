import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteComponent = ({list, label, keyField, handleOnchange = () => {}}) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          id={label}
          onChange={handleOnchange}
          freeSolo
          options={list}
          renderInput={(params) => <TextField {...params} label={label} />}
          getOptionLabel={(option) => option[keyField] ? option[keyField] : ''}
          renderOption={(props, option) =><li {...props}>{option[keyField] ? option[keyField] : ''}</li>}
          />
    </div>
  )
}

export default AutocompleteComponent