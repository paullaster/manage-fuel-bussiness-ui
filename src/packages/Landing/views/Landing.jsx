import { NavLink } from 'react-router-dom';
import { Button, Logo } from '../../../components';
import { FaAngleRight } from "react-icons/fa6";
import Landing_graphics from "../../../assets/images/Landing_graphics.svg";

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing_card'>
        <div className='card_header'>
          <div className='lading_logo'>
            <Logo width='40%' />
          </div>
          <ul className='lading_menus'>
            <li>
              <NavLink to={'#'}>Pricing</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>How it Works</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>FAQs</NavLink>
            </li>
          </ul>
          <div className='landing_cta'>
            <NavLink className={'btn-element btn_primary'}>Get started</NavLink>
          </div>
        </div>
        <div className='card_content'>
          <div className='card_content_left'>
            <div className={"card_content_theme_text"}>
              <h2>
                <span>Manage your daily</span>
                <span>tasks better without all</span>
                <span>the stress</span>
              </h2>
            </div>
            <div className={"card_content_introduction"}>
              <p>
                <span>Change the way you manage your tasks with our</span>
                <span>revolutionary resource managment technology</span>
              </p>
            </div>
            <div className={"card_content_cta"}>
              <NavLink className={'btn-element btn_primary'}>
                <span><FaAngleRight size={20} /></span>
                <span>Get started</span>
              </NavLink>
              <NavLink className={'btn-element btn-primary btn_transparent'}>Schedule for a demo</NavLink>
            </div>
          </div>
          <div className='card_content_right'>
            <img src={Landing_graphics} alt="landing page graphics" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing