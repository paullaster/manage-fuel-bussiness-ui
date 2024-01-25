import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteComponent = ({list, label, keyField, handleOnchange = () => {}, optionField = ''}) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          id={label}
          onChange={handleOnchange}
          freeSolo
          options={list.map((option) => option[keyField])}
          renderInput={(params) => <TextField {...params} label={label} />}
          getOptionLabel={(option) => {
            const key = optionField? optionField : keyField
            return option[key];
          }}
          />
    </div>
  )
}

export default AutocompleteComponent