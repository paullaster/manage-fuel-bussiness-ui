import { Form } from 'react-router-dom';
import { Button, InputComponent } from '@/components';
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import keycloak from '@/assets/images/keycloak.svg';

const Login = () => {
  return (
    <section>
      <div>
          <Form>
            <InputComponent 
            prelabelText = {'E-mail'}
            placeholder = {'someone@email.com'}
            type = {'email'}
            required
            >
              <MdAlternateEmail size={25} />
            </InputComponent>
            <InputComponent 
            prelabelText = {'Password'}
            placeholder = {'8+ characters, 1+ Capital letter, 1+ special characters'}
            type = {'password'}
            required
            >
              <MdLockOutline size = {25} />
            </InputComponent>

            <div>
              <Button className = {'btn-element btn_primary'}>Login</Button>
            </div>
          </Form>
          <div>
          <Button className = {'btn-element btn_transparent'}>
            <span><img src={keycloak} alt='keycloack logo ' /></span>
            <span>Sign in with keycloak</span>
          </Button>
          </div>
        </div>
    </section>
  )
}

export default Login