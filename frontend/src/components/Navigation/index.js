import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className='navbar-buttons' id='navbar-login-button'>Log In</NavLink>
                <NavLink to="/signup" className='navbar-buttons' id='navbar-signup-button'>Sign Up</NavLink>
            </>
        );
    }

    return (
        <div className='navbar-div'>
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <NavLink exact to="/" className='navbar-buttons' id='navbar-home-button'>Home</NavLink>
                    <span className='navbar-logo-phrase'>Somewhere New</span>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;