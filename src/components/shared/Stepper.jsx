import { getStepClass } from "../../packages/utils";

const Stepper = ({ steps, activeStep, children, ...arg }) => {
  return (
    <>
      <div className="stepper">
        {steps.map((step, index) => {
          return (
            <div className={`${getStepClass(index, activeStep)}`} key={step.id}>
              <div className="step-info">
              {/* <div className={"circle"}>{index + 1} </div> */}
              <div className={"caption"}>{step.caption}</div>
              {index < steps.length - 1 && <div className={"line"}></div>}
              </div>
            </div>
          );
        })}
      </div>
      {children}
    </>
  );
};

export default Stepper;
