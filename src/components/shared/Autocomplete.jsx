import Autocomplete from '@mui/material/Autocomplete';
import { InputComponent } from '..';

const AutocompleteComponent = ({list, label, key}) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          id={label}
          freeSolo
          options={list.map((option) => option[key])}
          renderInput = { (params) => <InputComponent {...params} prelabelText={label}/>}
          />
    </div>
  )
}

export default AutocompleteComponent