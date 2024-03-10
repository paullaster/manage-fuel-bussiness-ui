import { NavLink, Outlet, redirect, Navigate } from 'react-router-dom';
import account_avatar from '@/assets/images/accounts_avatar.svg';
import { Hide } from '@/utils';
import { Logo } from '@/components';
import { MdArrowDropDown } from 'react-icons/md';
import { useEffect, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AuthService from '../AuthService';
import { AuthContext } from '@/store';


const Account = () => {

  const [selectLanguage, setSelectLanguage] = useState(false);
  const { account, authSetter } = useContext(AuthContext);
    const { isAuthenticated } = account;

  useEffect(() => {

  }, [selectLanguage]);

  useEffect(() => {
    const handleCheckAuth = async () => {
        authSetter({ user: AuthService.getUser(), isAuthenticated: AuthService.isLoggedIn() });
    }
    handleCheckAuth();
  }, []);

  if (isAuthenticated) {
    return <Navigate to={'/dashboard'}  replace />
}


  const handleSelectLanguage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectLanguage(true);
  }

  const languageList = [
    {
      id: uuidv4(),
      lang: 'en',
      caption: 'English',
    },
    {
      id: uuidv4(),
      lang: 'es',
      caption: 'Espanyol',
    },
    {
      id: uuidv4(),
      lang: 'fr',
      caption: 'French',
    }
  ]

  return (
    <section className='account'>
      <div className='account_card'>
        <div className='account_card_left'>
          <div className='wording'>
            <div><Logo width={'10%'} /></div>
          </div>
          <div className='account_avatar'>
            <img src={account_avatar} alt="user accounts avatar" />
          </div>
        </div>
        <div className='account_card_right'>
          <div className='i18n'>
            <select id='i18n_list'>
              {
                languageList.map((item) => {
                  return (
                    <option key = {item.id} className={selectLanguage && 'selectLangActive'} value={item.lang} defaultValue={'en'}>{item.caption}</option>
                  )
                })
              }
              {/* <option value="en" defaultValue={'en'}>English</option>
                <option value="es">Espanol</option>
                <option value="fr">French</option> */}
            </select>
            <span onClick={handleSelectLanguage}>
              <MdArrowDropDown size={25} />
            </span>
          </div>
          <div className="account_specific">
            <div className='conditional_account_page_text'>
              {
                Hide('/register') &&
                <div className='free_package'>
                  <p>START FOR FREE</p>
                </div>
              }
              <div className='account_sign_options'>
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
              <div className='account_action_option'>
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
      </div>
    </section>
  )
}

export default Account