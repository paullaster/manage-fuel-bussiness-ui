import { InputComponent, AutocompleteComponent } from "@/components";
import { forwardRef } from "react";
import DivisionTopBar from '../../../shared/components/DivisionTopBar'

const Transport = forwardRef((props, ref) => {
  const {officers, handleSelectedOficer } = props;
  return (
    <div className="TransportationAndOfficerCard">
        <DivisionTopBar sectionTitle='Tranposrt and Officer Information'>
            </DivisionTopBar>
      <div className="transport">
          <InputComponent
              prelabelText="transport name"
              name="transport_name"
              ref={ref.transportNameRef}
          />
          <InputComponent
              prelabelText="vehicle registration"
              name="vehicle_registration"
              ref={ref.vehicleRegistrationRef}
          />
          <InputComponent
              prelabelText="driver name"
              name="driver_name"
              ref={ref.driverNameRef}
          />
          <AutocompleteComponent
                list={officers}
                label={'Select Officer'}
                keyField={'name'}
                handleOnchange={handleSelectedOficer}
            />
      </div>
    </div>
  )
})

export default Transport