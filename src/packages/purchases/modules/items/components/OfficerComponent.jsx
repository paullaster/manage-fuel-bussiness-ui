import { AutocompleteComponent } from '@/components';
import DivisionTopBar from "../../../shared/components/DivisionTopBar";
import { useState } from 'react';

const OfficerComponent = ({ handleSelectedOficer }) => {
    const [officers, setOfficers] = useState([{ name: 'Ken Mjungu' }, { name: 'Waigah Mwaura' }]);
    return (
        <div className='itemOfficer'>
            <DivisionTopBar sectionTitle="Officer details" />
            <div>
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