import { AutocompleteComponent, DatePickerComponent } from '@/components';
import DivisionTopBar from "../../../shared/components/DivisionTopBar";

const OfficerComponent = ({ handleSelectedOficer, officers, setValue }) => {
    return (
        <div className='itemOfficer'>
            <DivisionTopBar sectionTitle="Officer details and Purchase date" />
            <div className='itemOfficerInputs'>
                <AutocompleteComponent
                    list={officers}
                    label={'Select Officer'}
                    keyField={'name'}
                    handleOnchange={handleSelectedOficer}
                />
                <DatePickerComponent
                    label='Purchase date'
                    setValue={setValue}
                />
            </div>
        </div>
    )
}

export default OfficerComponent