

const Button = ({type = 'button', children, ...arg}) => {
  return (
    <button type={type} {...arg}>
        {children}
    </button>
  )
}

export default Button