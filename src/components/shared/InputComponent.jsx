import { forwardRef } from "react";

const InputComponent = forwardRef(({prelabelText = null, prelabelIcon = null , postlabel = null, error = null, children = null,  ...arg}, ref) => {
  return (
    <div className="input-group">
        <label htmlFor={prelabelText}><span>{prelabelText}</span><span>{prelabelIcon}</span></label>
        <input {...arg} ref={ref} id={prelabelText || postlabel || ''}/>
        {children}
        <label htmlFor={postlabel}>{postlabel}</label>

        {error && <span className="error_span">{error}</span>}
    </div>
  );
});

export default InputComponent;