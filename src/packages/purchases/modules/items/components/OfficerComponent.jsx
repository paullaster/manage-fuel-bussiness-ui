import { AutocompleteComponent } from '@/components';
import DivisionTopBar from "../../../shared/components/DivisionTopBar";
import { useState } from 'react';

const OfficerComponent = () => {
  const [officer, setOfficer] = useState([{name: 'Ken Mjungu'}, {name: 'Waigah Mwaura'}]);
  return (
    <div>
        <DivisionTopBar sectionTitle="Purcahse item details" />
        <AutocompleteComponent
                list={paymentMethods}
                label={'Select Officer'}
                keyField={'name'}
                handleOnchange={handleSelectedPaymentMethod}
            />
    </div>
  )
}

export default OfficerComponent