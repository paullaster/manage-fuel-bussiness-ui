import React from 'react';
import Logo from '../Logo';
import { Hide, NavigationAside } from '../../packages/utils';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navigation = ({links = []}) => {

  // if ( Hide('/admin')) return null;

  return (
   <nav className='nav'>
    <Sidebar links={NavigationAside}/>
    <ul>
    <li>
      <Logo height='4vh' width='4vw' />
      Navigation
    </li>
    </ul>
   </nav>
  )
}

export default Navigation