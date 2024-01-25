import { AutocompleteComponent } from '@/components';
import DivisionTopBar from "../../../shared/components/DivisionTopBar";
import { useState } from 'react';

const OfficerComponent = ({ handleSelectedOficer, officers }) => {
    return (
        <div className='itemOfficer'>
            <DivisionTopBar sectionTitle="Officer details" />
            <AutocompleteComponent
                list={officers}
                label={'Select Officer'}
                keyField={'name'}
                optionField='name'
                handleOnchange={handleSelectedOficer}
            />
        </div>
    )
}

export default OfficerComponent