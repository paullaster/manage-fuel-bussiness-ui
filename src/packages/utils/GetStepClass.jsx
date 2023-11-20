/**
 * 
 * @param {*} step 
 * @param {*} activeStep 
 * @returns {*string}
 */

export const getStepClass = (step, activeStep) => {
  let className = "step";
  if (activeStep === step) {
    className += " active";
  } else if (activeStep > step) {
    className += " complete";
  } else {
    className += " step-inactive";
  }
  return className;
};
