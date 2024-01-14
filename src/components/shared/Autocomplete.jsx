import Autocomplete from '@mui/material/Autocomplete';
import { InputComponent } from '..';

const AutocompleteComponent = ({list, label}) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          id={label}
          freeSolo
          options={list}
          renderInput = { (params) => <InputComponent {...params} prelabelText={label}/>}
          />
    </div>
  )
}

export default AutocompleteComponent