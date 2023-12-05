import React from 'react';
import Logo from '../Logo';
import { Hide, NavigationAside } from '../../utils';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navigation = ({ links }) => {

  if (Hide('/wizard')) return null;
  return (
    <nav className='nav'>
      <Sidebar links={NavigationAside} />
      <div className='nav-menus'>
        <div className='logo-container'><Logo width='4vw' /></div>
        <ul>
          {
            links.map((link) => {
              return (
                <>
                  {
                    !link.hasSublinks && <li key={link.id}>
                      <span>{link.icon}</span>
                      <NavLink to={link.to}>{link.caption}</NavLink>
                    </li>
                  }
                  {
                    link.hasSublinks &&
                    <li key={link.id}>
                      <span>{link.icon}</span>
                      <NavLink to={link.to}>{link.caption}</NavLink>
                        <ul>
                          {
                            link.hasSublinks.map((sub) => {
                              return (
                                <>
                                <li>
                                  <span> { sub.icon} </span>
                                  <NavLink to={sub.to} >{sub.caption}</NavLink>
                                </li>
                                </>
                              )
                            })
                          }
                        </ul>
                    </li>
                  }
                </>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navigation