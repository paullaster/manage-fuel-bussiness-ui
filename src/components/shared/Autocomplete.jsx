import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteComponent = ({list, label, keyField, handleOnchange = () => {}, getOptionLabel = () => {}}) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          id={label}
          onChange={handleOnchange}
          freeSolo
          options={list.map((option) => option[keyField])}
          renderInput={(params) => <TextField {...params} label={label} />}
          getOptionLabel={getOptionLabel}
          />
    </div>
  )
}

export default AutocompleteComponent