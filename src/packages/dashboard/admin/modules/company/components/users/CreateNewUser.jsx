import { Form } from 'react-router-dom';
import { Button } from '@/components';
import { useRef } from 'react';
import { createUser } from '../../../users/actions';

export const CreateNewUser = () => {

    const emailRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const stationNameRef = useRef(null);
    const stationEmailRef = useRef(null);

    const handleAdminCreateUser = (event) => {
        const payload = {
            email: emailRef.current.value,
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            password: passwordRef.current.value,
            phone_number: phoneNumberRef.current.value,
            station_name: stationNameRef.current.value,
            station_email: stationEmailRef.current.value,
        };
        createUser(payload)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <section>
            <div>
                <Form method='POST'>
                    <div className="input-group">
                        <label htmlFor="username">Email</label>
                        <div className="input_control">
                            <input
                                placeholder={'someone@email.com'}
                                type={'email'}
                                id='username'
                                required
                                ref={emailRef}
                            />

                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="first_name">First name</label>
                        <div className="input_control">
                            <input
                                placeholder={'John'}
                                type={'text'}
                                id='first_name'
                                required
                                ref={firstNameRef}
                            />

                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="last_name">Last name</label>
                        <div className="input_control">
                            <input
                                placeholder={'Doe'}
                                type={'text'}
                                id='last_name'
                                required
                                ref={lastNameRef}
                            />

                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input_control">
                            <input
                                type={'password'}
                                id='password'
                                required
                                ref={passwordRef}
                            />

                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone_number">Phone number</label>
                        <div className="input_control">
                            <input
                                placeholder={'+25470025765'}
                                type={'tel'}
                                id='phone_number'
                                required
                                ref={phoneNumberRef}
                            />

                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="station_name">Station name</label>
                        <div className="input_control">
                            <input
                                placeholder={'Station X'}
                                type={'text'}
                                id='station_name'
                                required
                                ref={stationNameRef}
                            />

                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="station_email">Station email</label>
                        <div className="input_control">
                            <input
                                placeholder={'station.x@x.com'}
                                type={'email'}
                                id='station_email'
                                required
                                ref={stationEmailRef}
                            />

                        </div>
                    </div>
                    <div className='btn-group'>
                        <Button className={'btn-element btn_primary'} onClick={handleAdminCreateUser}>Create user</Button>
                    </div>
                </Form>
            </div>
        </section>
    )
};