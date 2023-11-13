
const InputComponent = ({error = null, ...arg}) => {
  return (
    <div>
        <input {...arg}/>
        {error && <span className="error_span">{error}</span>}
    </div>
  )
}

export default InputComponent