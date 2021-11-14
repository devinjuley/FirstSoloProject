import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import dropDownMenuImage from './iconmonstr-user-icon.png'
import emailImage from './iconmonstr-paper-plane-resized.png'
import userImageInsideDropdown from './iconmonstr-user-inside-dropdown.png'
import { useHistory } from 'react-router-dom';
function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory()
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <>
            <a href='/createlisting' className='create-listing-link'>Create a listing</a>
            <button onClick={openMenu} id='dropdown-menu-button'>
                <img src={dropDownMenuImage} alt='dropdown menu' id='dropdown-menu-image' />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li id='username-inside-dropdown'>
                        <img src={userImageInsideDropdown} alt='email' id='email-image-dropdown' />
                        <span>{user.username}</span>
                    </li>
                    <li id='email-inside-dropdown'>
                        <img src={emailImage} alt='email' id='email-image-dropdown' />
                        <span>{user.email}</span>
                    </li>
                    <li>
                        <button onClick={logout} className='logout-button-inside-dropdown'>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;