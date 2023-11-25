import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import TankData from './TankData';
import PumpData from './PumpData';
import { Stepper, Button, InputComponent } from '../../../../../../components';
import { Form, useLocation, useActionData, useParams, useNavigate } from 'react-router-dom';
import { useAdminState, useAdminStateDispatch } from '../../../store';



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

  const { step } = useParams();
  const [activeStep, setActiveStep] = useState(parseInt(step));

  const currentLocation = useLocation();
  const dispatcher = useAdminStateDispatch();
  const { formData } = useAdminState();
  const navigate = useNavigate();

  const initPageResponse = JSON.parse(atob(currentLocation.search.slice(1).split('=')[1], 'base64'));
  console.log(initPageResponse);
  useEffect(() => {
    setActiveStep(parseInt(step));

    dispatcher({
      type: 'SAVE_COMPANY_DATA',
      payload: {
        uuid: initPageResponse.uuid,
        station_management_type: initPageResponse.station_management_type,
        company_name: initPageResponse.company_name,
        brand_name: initPageResponse.brand_name,
        station_name: initPageResponse.station_name,
      }
    });

  }, [step]);

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
      navigate(`/admin/:id/company/wizard/${prev + 1}${currentLocation.search}`, { replace: true });
      return prev + 1;
    });
  };

  const handlePreviouseClick = () => {
    setActiveStep((prev) => {
      if (prev < 1) return;
      navigate(`/admin/:id/company/wizard/${prev - 1}${currentLocation.search}`, { replace: true });
      return prev - 1;
    });
  };

  const validateOnSubmit = (e) => {
    e.target.textContent === "submit" &&
    !initPageResponse.number_of_tanks && 
    setActiveStep((prev) => {
      if (prev < 1) return;
      navigate(`/admin/:id/company/wizard/${prev - 1}${currentLocation.search}`, { replace: true });
      return prev - 1;
    });
  }

  return (
    <section className={'wizard'}>
      <Form method='PUT'>
        <InputComponent name={'company_name'} value={formData.company_name} hidden readOnly />
        <InputComponent name={'brand_name'} value={formData.brand_name} hidden readOnly />
        <InputComponent name={'station_name'} value={formData.station_name} hidden readOnly />
        <InputComponent name={'station_management_type'} value={formData.station_management_type} hidden readOnly />
        <InputComponent name={'uuid'} value={formData.uuid} hidden readOnly />
        <Stepper steps={steps} activeStep={activeStep}>
          <div className='stepper_form_controls'>
            {
              getSection(activeStep)
            }
          </div>
          <div className='stepper_and_wizard_btns'>
            {
              (activeStep !== 0)
              && <Button className={'btn-element'} onClick={handlePreviouseClick}>Previous</Button>
            }
            {
              activeStep !== steps.length - 1
              && <Button className={'btn-element'} onClick={handleSkipNext}>skip this step</Button>
            }
            <Button className={'btn-element btn_primary'} type='submit' onClick = { validateOnSubmit }>
              {
                activeStep === steps.length - 1 ? 'submit' : 'save'
              }
            </Button>
          </div>
        </Stepper>
      </Form>
    </section>
  )
}

export default Wizard;