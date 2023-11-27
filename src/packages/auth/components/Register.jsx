
import { Form, NavLink } from 'react-router-dom';
import { Button, InputComponent } from '@/components';
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import keycloak from '@/assets/images/keycloak.svg';

const Register = () => {
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
          <InputComponent
            prelabelText={'Password'}
            placeholder={'8+ characters, 1+ Capital letter, 1+ special characters'}
            type={'password'}
            required
          >
            <MdLockOutline size={25} />
          </InputComponent>

          <div>
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
      <div>
        <p>
          <span>By proceeding you confirm you're in agreement with our</span>
          <NavLink to={'#'}>Privacy policy</NavLink>
          <span>and</span>
          <NavLink to={'#'}>Terms</NavLink>
        </p>
      </div>
    </>
  )
}

export default Register