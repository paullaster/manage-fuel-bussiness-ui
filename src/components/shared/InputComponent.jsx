import { forwardRef } from "react";

const InputComponent = forwardRef(({prelabel = null , postlabel = null, error = null, ...arg}, ref) => {
  return (
    <div>
        <label htmlFor={prelabel}>{prelabel}</label>
        <input {...arg} ref={ref} id={prelabel || postlabel || ''}/>
        <label htmlFor={postlabel}>{postlabel}</label>

        {error && <span className="error_span">{error}</span>}
    </div>
  );
});

export default InputComponent;