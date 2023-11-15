export const getStepClass = (step, activeStep) => {
  let className = "steps";
  if (activeStep === step) {
    className += " step-active";
  } else if (activeStep > step) {
    className += " step-done";
  } else {
    className += " step-inactive";
  }
  return className;
};
