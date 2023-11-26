import { useState } from "react";
import { InputComponent, Button } from "../../../../../../components";
import { v4 as uuidv4 } from "uuid";

const PumpData = () => {
  const [number_of_pumps, set_number_of_pumps] = useState(0);
  return (
    <div className="pump_information">
      <div className="number_of_pumps">
        {/* <InputComponent
          name={"type"}
          value={"pump_data"}
          hidden readOnly
        /> */}
        <InputComponent
          type={"number"}
          name={"number_of_pumps"}
          placeholder={" Number of pumps"}
          required
          min={1}
          prelabelText={"Number of pumps"}
          onChange={(e) => set_number_of_pumps(e.target.value)}
        />
      </div>
      <div className="valve_data_container">
        {
          number_of_pumps > 0 &&
          [...Array(Number(number_of_pumps))].map((_, index) => {
            return (
              <div key={index + 1} className="valve_information">
                <p className="pump_caption">Pump {index + 1} valves </p>
                <div className={'valve_type'}>
                  <input
                    key={uuidv4()}
                    type={"checkbox"}
                    name={`valve_petrol_for_pump_${index + 1}`}
                    required
                    value={'Petrol'}
                    readOnly
                    className={'type_checkbox'}
                    id="Petrol"
                  />
                  <label htmlFor="Petrol">Petrol</label>
                </div>
                <div className={'valve_type'}>
                  <input
                    key={uuidv4()}
                    type={"checkbox"}
                    name={`valve_diesel_for_pump_${index + 1}`}
                    required
                    value={'Diesel'}
                    readOnly
                    className={'type_checkbox'}
                    id="Diesel"
                  />
                  <label htmlFor="Diesel">Diesel</label>
                </div>
                <div className={'valve_type'}>
                  <input
                    key={uuidv4()}
                    type={"checkbox"}
                    name={`valve_kerosene_for_pump_${index + 1}`}
                    required
                    value={'Kerosene'}
                    readOnly
                    id={'Kerosene'}
                    className={'type_checkbox'}
                  />
                  <label htmlFor="Kerosene">Kerosene</label>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};


export default PumpData;