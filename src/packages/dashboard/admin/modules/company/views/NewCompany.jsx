import { Form, NavLink } from "react-router-dom";
import { Button, InputComponent, Stepper } from "../../../../../../components";
import { useRef, useState } from "react";
import { MdAdd, MdOutlineStar } from "react-icons/md";

// const ValvesData = () => {
//   return (
//     <InputComponent
//     type={'number'}
//     name={`tank_capacity_${index + 1}`}
//     placeholder={`Enter tank capacity for tank`} required
//     min={1}
//   />
//   )
// }

const NewCompany = () => {

  /**
   * 
   * @param {*} event 
   */
  const validateForm = (event) => {
    console.log(event.target);
  }

  return (
    <section className="newCompany">
      <div className="introduction">
        <div className="introduction_heading"><h1>new company</h1></div>
        <div className="intriduction_subheading">
          <h3>general</h3>
          <p>this information is visible in the records you can create</p>
        </div>
      </div>
      <div className="form_section">
        <Form method="POST" className="newCompany_form">
          <div className="form_iput_controls">
            <InputComponent
              type={"text"}
              name={"company_name"}
              placeholder={"Company name"}
              required
              // onChange={handleOnChange}

              prelabelText={"Company name"}
              prelabelIcon={<MdOutlineStar size={5} />}
            />
            <InputComponent
              type={"text"}
              name={"brand_name"}
              placeholder={"Brand name"}
              required
              prelabelText={"Brand name"}
              prelabelIcon={<MdOutlineStar size={5} />}
            // onChange={handleOnChange}
            />
            <InputComponent
              type={"text"}
              name={"station_name"}
              placeholder={"Station name"}
              required

              prelabelText={"Station name"}
              prelabelIcon={<MdOutlineStar size={5} />}
            // onChange={handleOnChange}
            />
            <InputComponent
              type={"text"}
              name={"station_management_type"}
              placeholder={"Station management type"}
              required
              prelabelText={"Station management type"}
              prelabelIcon={<MdOutlineStar size={5} />}
            // onChange={handleOnChange}
            />
          </div>
          <div className="form_btn">
            <NavLink className={'btn-element'} to={'/admin/:id/company/list'} >cancel</NavLink>
            <Button className={'btn-element btn_primary'} type="submit" onClick={validateForm}>save</Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default NewCompany;