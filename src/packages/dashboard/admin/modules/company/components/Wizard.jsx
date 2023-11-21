import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import TankData from './TankData';
import PumpData from './PumpData';
import { Stepper, Button } from '../../../../../../components';
import { Form } from 'react-router-dom';



const getSection = (activeStep) => {
  switch (activeStep) {
    case 0:
      return <TankData />;
    case 1:
      return <PumpData />;
    default: return null;
  }
}

const Wizard = () => {

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: uuidv4(),
      caption: 'Tank information',
    },
    {
      id: uuidv4(),
      caption: 'Pump information',
    },
  ];

  return (
    <section className={'wizard'}>
      <Form method='POST'>
        <Stepper steps={steps} activeStep={activeStep}>
          <div className='stepper_form_controls'>
            {
              getSection(activeStep)
            }
          </div>
          <div className='stepper_and_wizard_btns'>
            {
              (activeStep !== 0)
              && <Button className={'btn-element stepper-btn'} onClick={() => setActiveStep(activeStep - 1)}>Previous</Button>
            }
            {
              activeStep !== steps.length - 1
              && <Button className={'btn-element stepper-btn'} onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
            }
            {activeStep === steps.length - 1 && <Button className={'btn-element btn_primary'}  type='submit'>save</Button>}
          </div>
        </Stepper>
      </Form>
    </section>
  )
}

export default Wizard;