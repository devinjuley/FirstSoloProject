import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getOaklandSpots } from '../../store/spots';
import './CreateListing.css';

function CreateListing() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("")
    const [city, setCity] = useState("");
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [imageUrl1, setImageUrl1] = useState("")
    const [imageUrl2, setImageUrl2] = useState("")
    const [imageUrl3, setImageUrl3] = useState("")
    const [imageUrl4, setImageUrl4] = useState("")
    const [imageUrl5, setImageUrl5] = useState("")
    const [errors, setErrors] = useState([]);

    if (!sessionUser) return <Redirect to="/login" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (password === confirmPassword) {
        // setErrors([]);
        return dispatch(sessionActions.signup({ title, details, city, state, country }))
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
                            Title
                            <input className='email-input-box'
                                placeholder='Title for the listing'
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Details
                            <input className='username-input-box'
                                placeholder='2 bedrooms, 2 bathrooms, backyard...'
                                type="text"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            City
                            <input className='username-input-box'
                                placeholder='Enter city'
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            State
                            <input className='username-input-box'
                                placeholder='Enter city'
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Country
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL:
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={imageUrl1}
                                onChange={(e) => setImageUrl1(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL:
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={imageUrl2}
                                onChange={(e) => setImageUrl2(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL:
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={imageUrl3}
                                onChange={(e) => setImageUrl3(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL:
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={imageUrl4}
                                onChange={(e) => setImageUrl4(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL:
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={imageUrl5}
                                onChange={(e) => setImageUrl5(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Tell us about this space
                            <textarea className='username-input-box'
                                placeholder='Write a little something about what your space has to offer'
                                type="text"
                                value={imageUrl5}
                                onChange={(e) => setImageUrl5(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='signup-button-div'>
                        <button type="submit" className='signup-button'>Create Listing!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateListing;