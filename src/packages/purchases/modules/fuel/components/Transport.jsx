import { InputComponent, AutocompleteComponent } from "@/components";
import { forwardRef } from "react";

const Transport = forwardRef(() => {
  return (
      <div className="transport">
          <InputComponent
              prelabelText="transport name"
              name="transport_name"
          />
          <InputComponent
              prelabelText="vehicle registration"
              name="vehicle_registration"
          />
          <InputComponent
              prelabelText="driver name"
              name="driver_name"
          />
          <AutocompleteComponent
                list={officers}
                label={'Select Officer'}
                keyField={'name'}
                handleOnchange={handleSelectedOficer}
            />
      </div>
  )
})

export default Transport