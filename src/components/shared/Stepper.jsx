import React from "react";

const Stepper = ({ steps, activeStep, ...arg }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        return (
          <div className={getStepClass(index, activeStep)} key={step.id}>
            <div>
              <div className={"circle"}>{index + 1}</div>
            </div>
            <div className={caption}>{step.caption}</div>
            {index < steps.length - 1 && <div className={"line"}></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
