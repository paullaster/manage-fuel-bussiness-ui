import { forwardRef } from "react";

const InputComponent = forwardRef(({prelabelText = null, prelabelIcon = null , postlabel = null, error = null, id = null, children = null,  ...arg}, ref) => {
  return (
    <div className="input-group">
        <label htmlFor={id}><span>{prelabelText}</span><span>{prelabelIcon}</span></label>
        <input {...arg} ref={ref} id={id ||''}/>
        {children}
        <label htmlFor={id}>{postlabel}</label>

        {error && <span className="error_span">{error}</span>}
    </div>
  );
});

export default InputComponent;