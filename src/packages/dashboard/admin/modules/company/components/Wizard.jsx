import React, { useState } from 'react';
import { v4 as uuidv4} from "uuid";
import TankData from './TankData';
import PumpData from './PumpData';
import { Stepper } from '../../../../../../components';
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

    const handleSave = (event) => {
        event.preventDefault();
    };

  return (
    <section className= {'wizard'}>
        <Form method='POST'>
        <Stepper steps={steps} activeStep={activeStep}>
        <div>
            {
              getSection(activeStep)
            }
            {
              (activeStep !== 0)
              && <button onClick={ () => setActiveStep(activeStep - 1) }>Previous</button>
            }
            {
              activeStep !== steps.length - 1
              && <button onClick={ () => setActiveStep(activeStep + 1) }>Next</button>
            }
            {
                <button onClick={ handleSave} type='submit'>save</button>
            }
          </div>
        </Stepper>
        </Form>
    </section>
  )
}

export default Wizard;