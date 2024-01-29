import { AutocompleteComponent, DatePickerComponent } from '@/components';
import DivisionTopBar from "../../../shared/components/DivisionTopBar";

const OfficerComponent = ({ handleSelectedOficer, officers }) => {
    return (
        <div className='itemOfficer'>
            <DivisionTopBar sectionTitle="Officer details and Purchase date" />
            <AutocompleteComponent
                list={officers}
                label={'Select Officer'}
                keyField={'name'}
                handleOnchange={handleSelectedOficer}
            />
            <DatePickerComponent 
                label='Purchase date'
            />
        </div>
    )
}

export default OfficerComponent