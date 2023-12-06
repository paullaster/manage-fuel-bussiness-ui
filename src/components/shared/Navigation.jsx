import React from 'react';
import Logo from '../Logo';
import { Hide, NavigationAside } from '@/utils';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';


const Navigation = ({ links }) => {

  const appStateDispatcher = useGlobalDispatcher();
  const appState = useGlobalState();


  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    appStateDispatcher({type: "TOGGLESUBLINK"}); //@todo: MAKE TOGGLING PER CHILD INISIDE A SPECIFIC LINK!!!
  }

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
                    <div key={link.id} className='hasSublink' >
                      <div onClick={handleOnClick} >
                      <div className='nav_text'>
                      <span>{link.icon}</span>
                      <NavLink to={link.to}>{link.caption}</NavLink>
                      </div>
                      <div className='nav_icon'>
                        { appState.toggleSubNavigation ? <MdExpandLess size= {30} /> : <MdExpandMore  size= {30} />}
                      </div>
                      </div>
                        <ul className= { appState.toggleSubNavigation ? 'show' : ''} >
                          {
                            link.sublinks.map((sub) => {
                              return (
                                <>
                                <li key={sub.id}>
                                  <span> { sub.icon} </span>
                                  <NavLink to={sub.to} >{sub.caption}</NavLink>
                                </li>
                                </>
                              )
                            })
                          }
                        </ul>
                    </div>
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