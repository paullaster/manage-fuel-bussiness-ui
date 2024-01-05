import React from 'react';
import { InputComponent } from "@/components";

const Transport = () => {
  return (
      <div className="newfuelpurchase_transport">
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
      </div>
  )
}

export default Transport