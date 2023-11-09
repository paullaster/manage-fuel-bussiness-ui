import React from 'react'
import logo from '../assets/finiflow.svg'

const Logo = ({width = '25%'}) => {
  return (
    <div className='logo'>
        <img src={logo} alt="finiflow logo" srcSet="" style={{width}}/>
    </div>
  )
}

export default Logo