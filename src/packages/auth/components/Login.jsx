import { Form } from 'react-router-dom';
import { Button, InputComponent } from '@/components';
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import keycloak from '@/assets/images/keycloak.svg';

const Login = () => {
  return (
    <>
      <div>
        <Form>
        <div className="input-group">
            <label htmlFor="username">E-mail</label>
            <div className="input_control">
              <input
                placeholder={'someone@email.com'}
                type={'email'}
                id='username'
                required
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
              />
              <MdLockOutline size={25} />
            </div>
          </div>

          <div className='btn-group'>
            <Button className={'btn-element btn_primary'}>Create an account</Button>
          </div>
        </Form>
        <div>
          <Button className={'btn-element btn_transparent'}>
            <span><img src={keycloak} alt='keycloack logo ' /></span>
            <span>Sign up with keycloak</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Login