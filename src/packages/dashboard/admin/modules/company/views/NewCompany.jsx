import { Form } from "react-router-dom"
import { Button, InputComponent } from "../../../../../../components"
import { useRef, useState } from "react"

const NewCompany = () => {

  const [number_of_tanks, set_number_of_tanks] = useState(0);
  const [number_of_pumps, set_number_of_pumps] = useState(0);

  const company_name = useRef(null);
  const brand_name = useRef(null);
  const station_name = useRef(null);
  const station_management_type = useRef(null);

  const number_of_valves = useRef(null);
  // const station_management_type = useRef(null);
  // const station_management_type = useRef(null);
  // const station_management_type = useRef(null);
  // const station_management_type = useRef(null);


  const handleOnChange = (e) => {
    const formData = {
      company_name: company_name.current.value,
      brand_name: brand_name.current.value,
      station_name: station_name.current.value,
      station_management_type: station_management_type.current.value,
      number_of_tanks: number_of_tanks.current.value,
      number_of_pumps: number_of_pumps.current.value,
      number_of_valves: number_of_valves.current.value,
      tanks: [],
      pumps: [],
    }

    console.log(formData);

  }
  return (
    <section className='newCompany'>
      <Form method="POST">
        <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company name'}
          required onChange={handleOnChange}
          ref={company_name}
        />
        <InputComponent
          type={'text'}
          name={'brand_name'}
          placeholder={'Brand name'}
          required ref={brand_name}
          onChange={handleOnChange}
        />
        <InputComponent
          type={'text'}
          name={'station_name'}
          placeholder={'Station name'}
          required ref={station_name}
          onChange={handleOnChange}
        />
        <InputComponent
          type={'text'}
          name={'station_management_type'}
          placeholder={'Station management type'}
          required ref={station_management_type}
          onChange={handleOnChange}
        />

        <InputComponent
          type={'number'}
          name={'number_of_tanks'}
          placeholder={'Number of tanks'} required
          min={1}
          onChange={(e) => set_number_of_tanks(e.target.value)}
        />
        {number_of_tanks > 0 && [...Array(Number(number_of_tanks))].map((_, index) => {
          return (
            <div key={index + 1}>
              <InputComponent
                prelabel={'Tank number: '}
                key={index}
                type={'number'}
                name={`tank_number_${index + 1}`}
                required
                value={index + 1}
                readOnly
              />
              <InputComponent
                type={'number'}
                name={`tank_capacity_${index + 1}`}
                placeholder={`Enter tank capacity for tank ${index + 1}`} required
                min={1}
              />
            </div>
          )
        })}

        <InputComponent
          type={'number'}
          name={'number_of_pumps'}
          placeholder={' Number of pumps'}
          required min={1}
          onChange={(e) => set_number_of_pumps(e.target.value)}
        />
        {number_of_pumps > 0 && [...Array(Number(number_of_pumps))].map((_, index) => {
          return (
            <div key={index + 1}>
              <InputComponent
                prelabel={'Pump number: '}
                key={index}
                type={'number'}
                name={`pump_number_${index + 1}`}
                required
                value={index + 1}
                readOnly
              />
              <Button className ={''}>
                add valve
              </Button>
              {/* <InputComponent
                type={'number'}
                name={`tank_capacity_${index + 1}`}
                placeholder={`Enter tank capacity for tank ${index + 1}`} required
                min={1}
              /> */}
            </div>
          )
        })}

        <InputComponent
          type={'number'}
          name={'number_of_valves'}
          placeholder={' Number of valves '}
          required min={1}
        />

        {/* <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company Name'}
          required
        />

        <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company Name'}
          required
        />

        <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company Name'}
          required
        />

        <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company Name'}
          required
        />

        <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company Name'}
          required
        />

        <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company Name'}
          required
        /> */}

        {/* <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company Name'}
          required
        />

        <InputComponent
          type={'text'}
          name={'company_name'}
          placeholder={'Company Name'}
          required
        /> */}

        <InputComponent
          type={'checkbox'}
          name={'dead_stock'}
          placeholder={''}
          required
          postlabel = {'Dead Stock ?'}
        />

      </Form>
    </section>
  )
}

export default NewCompany