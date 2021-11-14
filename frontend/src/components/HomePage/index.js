import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getSearch } from '../../store/spots';
import './HomePage.css';

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory()
    // const sessionUser = useSelector(state => state.session.user);
    const [searchTerm, setSearchTerm] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('search term', searchTerm)
        let searchParam = await dispatch(getSearch(searchTerm))
        console.log('search param', searchParam)
        if (searchParam) {
            history.push(`/allspots/${searchTerm}`)
        }
    }

    return (
        <div>
            <div className='search-bar-div'>
                <img src='https://media.discordapp.net/attachments/907008758226489385/907022889868472391/unknown.png?width=1220&height=686' alt='green forest' className='homeImage'></img>
            </div>
            <div className='inner-search-div'>
                <form className='search-bar' onSubmit={handleSubmit}>
                    <label>
                        <input className='search-bar-input' type='search' placeholder='What city would you like to visit?' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
                        <button type='submit' className='search-button'>Go!</button>
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
                    <div className='location-names-spans1'>
                        <a href='/sanfrancisco'>
                            <img src='https://media.discordapp.net/attachments/907008758226489385/907064997786566686/b2f9a313-334a-4e52-bdbe-caf0f0a6c804.png' alt='san-fran' className='san-fran-icon' />
                        </a>
                        <span className='link-title'>San Francisco</span>
                    </div>
                </div>
                <div className='oakland-div'>
                    <div className='location-names-spans2'>
                        <a href='/oakland'>
                            <img src='https://media.discordapp.net/attachments/907008758226489385/907065103873101834/ee86b8d6-b214-43f5-912c-3db2637a5724.png' alt='oakland' className='oakland-icon' />
                        </a>
                        <span className='link-title'>Oakland</span>
                    </div>
                </div>
                <div className='san-jose-div'>
                    <div className='location-names-spans3'>
                        <a href='/sanjose'>
                            <img src='https://media.discordapp.net/attachments/907008758226489385/907065148466950185/03626720-dc3d-4e49-8264-39231ba1e1e2.png' alt='san-jose' className='san-jose-icon' />
                        </a>
                        <span className='link-title'>San Jose</span>
                    </div>
                </div>
                <div className='berkeley-div'>
                    <div className='location-names-spans4'>
                        <a href='/berkeley'>
                            <img src='https://media.discordapp.net/attachments/907008758226489385/907065196709830717/835985b7-7b88-491d-ba3e-2d1245beb21b.png' alt='berkeley' className='berkeley-icon' />
                        </a>
                        <span className='link-title'>Berkeley</span>
                    </div>
                </div>
            </div>
            <div className='background-color-for-lower-images'>
                <div className='two-lower-home-images'>
                    <span className='looking-to-host'>Looking to host? <a href='/signup' className='here-button'>Sign up!</a></span>
                    <img src='https://media.discordapp.net/attachments/909509996335759430/909535838654853120/unknown.png' className='second-home-image' />
                    {/* <img src='https://media.discordapp.net/attachments/909509996335759430/909535987800088606/6adb1a38-b912-4dd6-83d7-103bb9a80d43.png' className='second-home-image' /> */}
                </div>
            </div>
            <div className='footer'>
                <a href='/' className='my-name'>
                    Devin Juley
                </a>
                <a href='https://www.linkedin.com/in/devin-juley-6b4847149/' className='linked-in'>
                    LinkedIn
                </a>
                <a href='https://github.com/devinjuley' className='git-hub'>
                    GitHub
                </a>
            </div>
        </div>


    )
}

export default HomePage;