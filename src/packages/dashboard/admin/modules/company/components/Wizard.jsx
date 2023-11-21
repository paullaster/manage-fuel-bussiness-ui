import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import TankData from './TankData';
import PumpData from './PumpData';
import { Stepper, Button, InputComponent } from '../../../../../../components';
import { Form, useLocation, useActionData, useParams, useNavigate } from 'react-router-dom';



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

  const currentLocation = useLocation();
  const actionData = useActionData();
  const { step }  = useParams();
  const navigate = useNavigate();
  console.log(step);

  
  useEffect(() => {
    
    setActiveStep(parseInt(step));
  },[activeStep]);

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

  const handleSkipNext = () => {
    setActiveStep((prev) => {
      navigate(`/admin/:id/company/wizard/${prev + 1}`, { replace: true });
      return prev + 1;
    });
  };

  const handlePreviouseClick = () => {
    setActiveStep((prev) => {
      if (prev < 1) return;
      navigate(`/admin/:id/company/wizard/${prev - 1}`, { replace: true });
      return prev - 1;
    });
  };

  return (
    <section className={'wizard'}>
      <Form method='PUT'>
        {/* <InputComponent name = {'organization_id'} value = {''} hidden /> */}
        <Stepper steps={steps} activeStep={activeStep}>
          <div className='stepper_form_controls'>
            {
              getSection(activeStep)
            }
          </div>
          <div className='stepper_and_wizard_btns'>
            {
              (activeStep !== 0)
              && <Button className={'btn-element'} onClick={ handlePreviouseClick }>Previous</Button>
            }
            {
              activeStep !== steps.length - 1
              && <Button className={'btn-element'} onClick={ handleSkipNext }>skip this step</Button>
            }
           <Button className={'btn-element btn_primary'}  type='submit'>save</Button>
          </div>
        </Stepper>
      </Form>
    </section>
  )
}

export default Wizard;