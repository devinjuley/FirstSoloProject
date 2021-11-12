import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createNewSpot } from '../../store/spots';
import { useHistory } from 'react-router-dom';
import './CreateListing.css';

function CreateListing() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUserId = useSelector((state) => state?.session.user.id);
    // console.log('this is it', sessionUserId)
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("")
    const [city, setCity] = useState("");
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [url1, setUrl1] = useState("")
    const [url2, setUrl2] = useState("")
    const [url3, setUrl3] = useState("")
    const [url4, setUrl4] = useState("")
    const [url5, setUrl5] = useState("")
    const [aboutThisSpace, setAboutThisSpace] = useState("")
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState([]);

    // if (!sessionUserId) return <Redirect to="/login" />;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newListing = {
            userId: sessionUserId,
            title,
            details,
            city,
            state,
            country,
            url1,
            url2,
            url3,
            url4,
            url5,
            aboutThisSpace,
            price
        }

        let createdListing = await dispatch(createNewSpot(newListing))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

        if (createdListing) {
            history.push(`/spot/${createdListing.spot.id}`)
        }
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

                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Country
                            <input className='username-input-box'
                                placeholder='Enter Country'
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}

                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={url1}
                                onChange={(e) => setUrl1(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={url2}
                                onChange={(e) => setUrl2(e.target.value)}

                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={url3}
                                onChange={(e) => setUrl3(e.target.value)}

                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL:
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={url4}
                                onChange={(e) => setUrl4(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Image URL
                            <input className='username-input-box'
                                placeholder='Enter an Image URL'
                                type="text"
                                value={url5}
                                onChange={(e) => setUrl5(e.target.value)}
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
                                value={aboutThisSpace}
                                onChange={(e) => setAboutThisSpace(e.target.value)}

                            />
                        </label>
                    </div>
                    <div className='username-div'>
                        <label className='username-label'>
                            Price
                            <input className='username-input-box'
                                placeholder='Price per night'
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}

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