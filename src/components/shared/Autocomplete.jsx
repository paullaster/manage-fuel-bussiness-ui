import Autocomplete from '@mui/material/Autocomplete';
import { InputComponent } from "@/component";

const label = " ";
const AutocompleteComponent = ({list, label}) => {
  return (
      <div className={'autocomplete'}>
          <Autocomplete 
          freeSolo
          options={['option1', 'option2']}
          renderInput = { (params) => <InputComponent {...params} prelabelText={label}/>}
          />
    </div>
  )
}

export default AutocompleteComponent