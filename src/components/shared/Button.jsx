

const Button = ({type = 'button', children, clickEvent, ...arg}) => {
  return (
    <button type={type} onClick={clickEvent} {...arg}>
        {children}
    </button>
  )
}

export default Button