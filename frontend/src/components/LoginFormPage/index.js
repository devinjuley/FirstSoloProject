import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className='parent-login-div'>
            <div className='login-page-div'>
                <form onSubmit={handleSubmit}>
                    <ul className='signup-login-errors'>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className='username-email-div'>
                        <label className='username-email-label'>
                            Username or Email
                            <input className='username-input-box'
                                placeholder='Enter Username or Email'
                                type="text"
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='password-div'>
                        <label className='password-label'>
                            Password
                            <input className='password-input-box'
                                placeholder='Enter Password'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='login-button-div'>
                        <button type="submit" className='login-button'>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginFormPage;