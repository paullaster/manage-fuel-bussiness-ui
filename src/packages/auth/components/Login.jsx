import { Form, useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { MdAlternateEmail, MdFamilyRestroom, MdLockOutline } from "react-icons/md";
import { useEffect, useRef } from 'react';
import { login } from '../authActions';
import AuthService from '../AuthService';
import { useGlobalDispatcher, useGlobalState } from '@/store';
import axios from 'axios';

const Login = () => {

  const { isAuthenticated } = useGlobalState();
  const globalStateSetter = useGlobalDispatcher();
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (event) => {
    const payload = {
      email_or_phone: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    login(payload)
    .then((res) => {
      AuthService.Login(res.access, res.refresh);
      globalStateSetter({type: 'SETAUTH', payload: AuthService.isLoggedIn()});
      console.log(res);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated]);
  return (
      <div>
        <Form>
        <div className="input-group">
            <label htmlFor="username">Email or Phone</label>
            <div className="input_control">
              <input
                placeholder="Enter your email address or phone number"
                type='text'
                id='username'
                required
                aria-describedby="validationMessage"
                ref={usernameRef}
              />
              <MdAlternateEmail size={25} />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input_control">
              <input
                placeholder={'8+ characters, 1+ Capital letter, 1+ special characters'}
                type={'password'}
                id='password'
                required
                ref={passwordRef}
              />
              <MdLockOutline size={25} />
            </div>
          </div>

          <div className='btn-group'>
            <Button className={'btn-element btn_primary'} onClick={handleLogin}>Login</Button>
          </div>
        </Form>
      </div>
  )
}

export default Login