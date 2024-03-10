import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { forwardRef } from 'react';

const AutocompleteComponent = forwardRef(({list, label, keyField,  defaultVal = {}, handleOnchange = () => {}}, ref) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          id={label}
          onChange={handleOnchange}
          freeSolo
          options={list}
          ref={ref}
          renderInput={(params) => <TextField {...params} label={label} ref={params.ref}/>}
          getOptionLabel={(option) => option[keyField] ? option[keyField] : ''}
          renderOption={(props, option) =><li {...props}>{option[keyField] ? option[keyField] : ''}</li>}
          defaultValue={defaultVal}
          />
    </div>
  )
})

export default AutocompleteComponent