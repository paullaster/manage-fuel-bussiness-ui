import { useState } from "react";
import { InputComponent } from "../../../../../../components";

const TankData = () => {
    const [number_of_tanks, set_number_of_tanks] = useState(0);
  
    return (
      <>
        <InputComponent
          type={"number"}
          name={"number_of_tanks"}
          placeholder={"Number of tanks"}
          required
          min={1}
          onChange={(e) => set_number_of_tanks(e.target.value)}
          prelabelText = {"Number of tanks"}
        />
        {number_of_tanks > 0 &&
          [...Array(Number(number_of_tanks))].map((_, index) => {
            return (
              <div key={index + 1}>
                <InputComponent
                  type={"number"}
                  name={`tank_capacity_for_tank_${index + 1}`}
                  // placeholder={`Enter tank capacity for tank ${index + 1}`}
                  required
                  prelabelText = {`Enter tank capacity for tank ${index + 1}`}
                  min={1}
                />
              </div>
            );
          })}
      </>
    );
  };
  
  export default TankData;