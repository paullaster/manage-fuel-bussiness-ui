import React from 'react'
import logo from '../assets/finiflow.svg'

const Logo = ({height ='25%', width = '25%'}) => {
  return (
    <div className='logo'>
        <img src={logo} alt="finiflow logo" srcset="" style={{height, width}}/>
    </div>
  )
}

export default Logo