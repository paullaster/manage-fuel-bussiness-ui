import React from 'react';
import { NavLink, Outlet, redirect } from 'react-router-dom';
import account_avatar from '@/assets/images/accounts_avatar.svg';
import { Hide } from '@/utils'
import { Logo } from '@/components';


const Account = () => {

  return (
    <section className='account'>
      <div className='account_card'>
        <div className='account_card_left'>
          <div className='wording'>
            <div><Logo width = {'10%'}/></div>
          </div>
          <div className='account_avatar'>
            <img src={account_avatar} alt="user accounts avatar" />
          </div>
        </div>
        <div className='account_card_right'>
          <div className='i18n'>
            <select id='i18n_list'>
              <option value="en" defaultValue={'en'}>English</option>
              <option value="es">Espanol</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className='conditional_login_page_text'>
            {
              Hide('/register') &&
              <div>
                <p>START FOR FREE</p>
              </div>
            }
            <div>
              <h2>
                {
                  Hide('/register')
                    ? 'Sign up to fluecloud'
                    : Hide('/login')
                      ? 'Sign in to fluecloud'
                      : redirect('/*')
                }
              </h2>
            </div>
            <div>
              {
                Hide('/register') && <p>Already a member? <NavLink to={'/account/login'}>Login</NavLink></p>
              }
              {
                Hide('/login') && <p>Do not have account yet? <NavLink to={'/account/register'}>Register</NavLink></p>
              }
            </div>
          </div>
          <div className='account_options'>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account