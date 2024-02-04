import { AutocompleteComponent } from '@/components';
import DivisionTopBar from "../../../shared/components/DivisionTopBar";

const OfficerComponent = ({ handleSelectedOficer, officers }) => {
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
                
            </div>
        </div>
    )
}

export default OfficerComponent