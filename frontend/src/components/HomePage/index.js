import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    // const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    // const [credential, setCredential] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState([]);

    return (
        <div>
            <div className='search-bar-div'>
                <img src='https://media.discordapp.net/attachments/907008758226489385/907022889868472391/unknown.png?width=1220&height=686' alt='green forest' className='homeImage'></img>
            </div>
            <div className='inner-search-div'>
                <form className='search-bar'>
                    <label>
                        <input className='search-bar-input' type='search' placeholder='Where would you like to visit?' />
                        <button className='search-button'>Go!</button>
                    </label>
                </form>
            </div>
            <div className='get-all-spots-title'>Not sure where to go? Perfect.</div>
            <div>
                <a href='/allspots' className='get-all-spots'>I'm flexible</a>
            </div>
            <div className='explore-nearby-title-div'>
                <span className='explore-nearby-title'>Explore nearby</span>
            </div>
            <div className='explore-nearby-div'>
                <div className='san-francisco-div'>
                    <a href='/sanfrancisco'>
                        <img src='https://media.discordapp.net/attachments/907008758226489385/907064997786566686/b2f9a313-334a-4e52-bdbe-caf0f0a6c804.png' alt='san-fran' className='san-fran-icon' />
                    </a>
                </div>
                <div className='location-names-spans'>
                    <span>San Francisco</span>
                </div>
                <div className='oakland-div'>
                    <a href='/oakland'>
                        <img src='https://media.discordapp.net/attachments/907008758226489385/907065103873101834/ee86b8d6-b214-43f5-912c-3db2637a5724.png' alt='oakland' className='oakland-icon' />
                    </a>
                </div>
                <div className='location-names-spans'>
                    <span>Oakland</span>
                </div>
                <div className='san-jose-div'>
                    <a href='/sanjose'>
                        <img src='https://media.discordapp.net/attachments/907008758226489385/907065148466950185/03626720-dc3d-4e49-8264-39231ba1e1e2.png' alt='san-jose' className='san-jose-icon' />
                    </a>
                </div>
                <div className='location-names-spans'>
                    <span>San Jose</span>
                </div>
                <div className='berkeley-div'>
                    <a href='/berkeley'>
                        <img src='https://media.discordapp.net/attachments/907008758226489385/907065196709830717/835985b7-7b88-491d-ba3e-2d1245beb21b.png' alt='berkeley' className='berkeley-icon' />
                    </a>
                </div>
                <div className='location-names-spans'>
                    <span>Berkeley</span>
                </div>
            </div>
        </div>


    )
}

export default HomePage;