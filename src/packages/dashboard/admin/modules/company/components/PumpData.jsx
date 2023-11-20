import { useState } from "react";
import { InputComponent, Button } from "../../../../../../components";
import { MdAdd } from "react-icons/md"

const PumpData = () => {
  const [number_of_pumps, set_number_of_pumps] = useState(0);

  const handleAddValves = () => {
    return <ValvesData />
  };
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
                {/* <div className="valves"> */}
                  <p>Pump {index + 1} valves </p>
                  <div className= {'valve_type'}>
                    <InputComponent
                      key={index}
                      type={"checkbox"}
                      name={`valve_type`}
                      required
                      value={'Petrol'}
                      readOnly
                      postlabel={'Petrol'}
                    />
                    <InputComponent type={'number'} placeholder={'How many?'} className = {'type_number'} />
                  </div>
                  <div  className= {'valve_type'}>
                    <InputComponent
                      key={index}
                      type={"checkbox"}
                      name={`valve_type`}
                      required
                      value={'Diesel'}
                      readOnly
                      postlabel={'Diesel'}
                    />
                    <InputComponent type={'number'} placeholder={'How many?'} />
                  </div>
                  <div  className= {'valve_type'}>
                    <InputComponent
                      key={index}
                      type={"checkbox"}
                      name={`valve_type`}
                      required
                      value={'Kerosene'}
                      readOnly
                      postlabel={'Kerosene'}
                    />
                    <InputComponent type={'number'} placeholder={'How many?'} />
                  </div>
                {/* </div> */}
                {/* <Button
                className={"btn-element btn_primary btn-icon"}
                title={"add valve"}
                onClick={handleAddValves}
              >
                <span><MdAdd size={30} /></span>
                {/* <span>add valves</span> */}
                {/* </Button> */}
                {/* <InputComponent
                type={'number'}
                name={`tank_capacity_${index + 1}`}
                placeholder={`Enter tank capacity for tank ${index + 1}`} required
                min={1}
              /> */}
              </div>
            )
          })
        }
      </div>
    </div>
  )
};


export default PumpData;