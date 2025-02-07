
import { Form, NavLink } from 'react-router-dom';
import { Button } from '@/components';
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";

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
      </div>
      <div className='tac'>
        <p>
          <span>By proceeding you confirm you agree to our</span>
          <NavLink to={'#'}> Privacy policy </NavLink>
          <span> and </span><br />
          <NavLink to={'#'}> Terms and conditions </NavLink>
        </p>
      </div>
    </>
  )
}

export default Register