import { Form } from 'react-router-dom';
import { Button } from '@/components';
import { useRef } from 'react';
import { createUser } from '../../Actions';
import SectionIntroduction from '@/components/shared/SectionIntroduction';

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
        <section className='adminCreateUser'>
            <SectionIntroduction text='Create new user' />
            <div className='adminCreateUserForm'>
                <Form method='POST'>
                    <div className="input-group">
                        <label htmlFor="username">Email</label>
                        <input
                            placeholder={'someone@email.com'}
                            type={'email'}
                            id='username'
                            required
                            ref={emailRef}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="first_name">First name</label>
                        <input
                            placeholder={'John'}
                            type={'text'}
                            id='first_name'
                            required
                            ref={firstNameRef}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="last_name">Last name</label>
                        <input
                            placeholder={'Doe'}
                            type={'text'}
                            id='last_name'
                            required
                            ref={lastNameRef}
                        />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type={'password'}
                            id='password'
                            required
                            ref={passwordRef}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone_number">Phone number</label>
                        <input
                            placeholder={'+25470025765'}
                            type={'tel'}
                            id='phone_number'
                            required
                            ref={phoneNumberRef}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="station_name">Station name</label>
                        <input
                            placeholder={'Station X'}
                            type={'text'}
                            id='station_name'
                            required
                            ref={stationNameRef}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="station_email">Station email</label>
                        <input
                            placeholder={'station.x@x.com'}
                            type={'email'}
                            id='station_email'
                            required
                            ref={stationEmailRef}
                        />
                    </div>
                    <div className='btn-group'>
                        <Button className={'btn-element btn_primary'} onClick={handleAdminCreateUser}>Create user</Button>
                    </div>
                </Form>
            </div>
        </section>
    )
};