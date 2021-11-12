import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("")
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (password === confirmPassword) {
        // setErrors([]);
        return dispatch(sessionActions.signup({ email, username, password, photoUrl, confirmPassword }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        // }
        // return setErrors(['Confirm Password and Password must match']);
    };

    return (
        <div className='parent-signup-div'>
            <div className='signup-page-div'>
                <form onSubmit={handleSubmit}>
                    <ul className='signup-login-errors'>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className='email-div'>
                        <label className='email-label'>
                            Email
                            <input className='email-input-box'
                                placeholder='Enter your email address'
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Username
                            <input className='username-input-box'
                                placeholder='Enter a username'
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Profile photo
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}

                            />
                        </label>
                    </div>
                    <div className='password-div'>
                        <label className='password-label'>
                            Password
                            <input className='password-input-box'
                                placeholder='Enter a password'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='confirm-password-div'>
                        <label className='confirm-password-label'>
                            Confirm Password
                            <input className='confirm-password-input-box'
                                placeholder='Confirm password'
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='signup-button-div'>
                        <button type="submit" className='signup-button'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupFormPage;