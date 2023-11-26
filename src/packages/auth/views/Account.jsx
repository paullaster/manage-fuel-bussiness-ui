import React from 'react';
import { Outlet } from 'react-router-dom';
import account_avatar from '@/assets/images/accounts_avatar.svg';

const Account = () => {
  return (
    <section className='account'>
      <div className='account_card'>
        <div className='account_card_left'>
          <div className='wording'>
            <div><h2>Finiflow</h2></div>
          </div>
          <div className='account_avatar'>
              <img src={account_avatar} alt="user accounts avatar" />
          </div>
        </div>
        <div className='account_card_right'>
          <div className='i18n'>
              <select  id='i18n_list'>
                <option value="en" selected>English</option>
                <option value="es">Espanol</option>
                <option value="fr">French</option>
              </select>
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