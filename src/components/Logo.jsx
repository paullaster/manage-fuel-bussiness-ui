import React from 'react'
import logo from '../assets/finiflow.svg'

const Logo = ({height, width}) => {
  return (
    <div className='logo'>
        <img src={logo} alt="finiflow logo" srcset="" />
    </div>
  )
}

export default Logo