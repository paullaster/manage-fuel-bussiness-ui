import React from 'react';
import Logo from '../Logo';
import { Hide, NavigationAside } from '../../packages/utils';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navigation = ({links}) => {

  // if ( Hide('/admin')) return null;
  return (
    <nav className='nav'>
      <Sidebar links={NavigationAside} />
      <div className='nav-menus'>
        <div className='logo-container'><Logo width='4vw' /></div>
        <ul>
          {
            links.map((link) => {
              return (
                <li key={link.id}>
                    <span>{link.icon}</span>
                    <NavLink to={link.to}>{link.caption}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navigation