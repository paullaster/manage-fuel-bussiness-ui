import { useState } from "react";
import { InputComponent, Button } from "../../../../../../components";
import { MdAdd } from "react-icons/md"

const PumpData = () => {
  const [number_of_pumps, set_number_of_pumps] = useState(0);
  return (
    <div className="pump_information">
      <div className="number_of_pumps">
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
                  <div className= {'valve_type'}>
                    <input
                      key={index}
                      type={"checkbox"}
                      name={`valve_type_for_pump_${index + 1}`}
                      required
                      value={'Petrol'}
                      readOnly
                      className={'type_checkbox'}
                      id="Petrol"
                    />
                    <label htmlFor="Petrol">Petrol</label>
                    <input type={'number'} placeholder={'How many?'} className = {'type_number'} name={`number_petrol_valve_type_for_pump_${index + 1}`} />
                  </div>
                  <div  className= {'valve_type'}>
                    <input
                      key={index}
                      type={"checkbox"}
                      name={`valve_type_for_pump_${index + 1}`}
                      required
                      value={'Diesel'}
                      readOnly
                      className={'type_checkbox'}
                      id="Diesel"
                    />
                    <label htmlFor="Diesel">Diesel</label>
                    <input type={'number'} placeholder={'How many?'} className = {'type_number'} name={`number_diesel_valve_type_for_pump_${index + 1}`} />
                  </div>
                  <div  className= {'valve_type'}>
                    <input
                      key={index}
                      type={"checkbox"}
                      name={`valve_type_for_pump_${index + 1}`}
                      required
                      value={'Kerosene'}
                      readOnly
                      id = {'Kerosene'}
                      className={'type_checkbox'}
                    />
                    <label htmlFor="Kerosene">Kerosene</label>
                    <input htmlFor = "Kerosene" type={'number'} placeholder={'How many?'} className = {'type_number'}  name={`number_kerosene_valve_type_for_pump_${index + 1}`}/>
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