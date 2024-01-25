import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteComponent = ({list, label, keyField, handleOnchange = () => {}, optionField = ''}) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          id={label}
          onChange={handleOnchange}
          freeSolo
          options={list}
          renderInput={(params) => <TextField {...params} label={label} />}
          getOptionLabel={(option) => {
            const key = optionField ? optionField : keyField
            return option[key] ? option[key] : '';
          }}
          renderOption={(props, option) => {
            const optKey = optionField ? optionField : null

           return ( <li {...props}>
              {option[keyField]}
              </li>
  )
          }}
          />
    </div>
  )
}

export default AutocompleteComponent