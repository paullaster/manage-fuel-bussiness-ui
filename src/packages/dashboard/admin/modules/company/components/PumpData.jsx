import { useState } from "react";
import { InputComponent, Button } from "../../../../../../components";
import { MdAdd } from "react-icons/md"

const PumpData = () => {
  const [number_of_pumps, set_number_of_pumps] = useState(0);

  const handleAddValves = () => {
    return <ValvesData />
  };
  return (
    <>
      <InputComponent
        type={"number"}
        name={"number_of_pumps"}
        placeholder={" Number of pumps"}
        required
        min={1}
        onChange={(e) => set_number_of_pumps(e.target.value)}
      />
      {
        number_of_pumps > 0 && 
        [...Array(Number(number_of_pumps))].map((_, index) => {
            return (
              <div key={index + 1}>
              <InputComponent
                key={index}
                type={"number"}
                name={`pump_number_${index + 1}`}
                required
                value={index + 1}
                readOnly
              />
              <Button
                className={"btn-element btn_primary btn-icon"}
                title={"add valve"}
                onClick = { handleAddValves }
              >
                <MdAdd size={30} />
              </Button>
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
    </>
  )
};


export default PumpData;