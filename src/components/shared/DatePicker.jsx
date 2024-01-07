import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer component={'DatePicker'}>
            <DatePicker label={'mm/dd/yyyy'}/>
        </DemoContainer>
    </LocalizationProvider>
  )
}

export default DatePicker