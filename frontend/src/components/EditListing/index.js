import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getEditListing, editListing } from '../../store/spots';
import { useHistory } from 'react-router-dom';
import './EditListing.css';

function EditListing() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const sessionUserId = useSelector((state) => state.session.user.id);
    const spot = useSelector(state => state.spots[id]);
    useEffect(() => {
        dispatch(getEditListing(id))
    }, [dispatch])
    const history = useHistory();

    const [title, setTitle] = useState(spot?.title);
    const [details, setDetails] = useState(spot?.details)
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state)
    const [country, setCountry] = useState(spot?.country)
    const [url1, setUrl1] = useState(spot?.Images[0].url)
    const [url2, setUrl2] = useState(spot?.Images[1].url)
    const [url3, setUrl3] = useState(spot?.Images[2].url)
    const [url4, setUrl4] = useState(spot?.Images[3].url)
    const [url5, setUrl5] = useState(spot?.Images[4].url)
    const [aboutThisSpace, setAboutThisSpace] = useState(spot?.aboutThisSpace)
    const [price, setPrice] = useState(spot?.price);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (spot) {
            setTitle(spot?.title)
            setDetails(spot?.details)
            setCity(spot?.city)
            setState(spot?.state)
            setCountry(spot?.country)
            setUrl1(spot?.Images[0].url)
            setUrl2(spot?.Images[1].url)
            setUrl3(spot?.Images[2].url)
            setUrl4(spot?.Images[3].url)
            setUrl5(spot?.Images[4].url)
            setAboutThisSpace(spot?.aboutThisSpace)
            setPrice(spot?.price)
        }
    }, [spot])

    const updateTitle = (e) => setTitle(e.target.value);
    const updateDetails = (e) => setDetails(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateUrl1 = (e) => setUrl1(e.target.value);
    const updateUrl2 = (e) => setUrl2(e.target.value);
    const updateUrl3 = (e) => setUrl3(e.target.value);
    const updateUrl4 = (e) => setUrl4(e.target.value);
    const updateUrl5 = (e) => setUrl5(e.target.value);
    const updateAboutThisSpace = (e) => setAboutThisSpace(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateListing = {
            id: id,
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

        let updatedListing = await dispatch(editListing(updateListing))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        if (updatedListing) {
            history.push(`/spot/${id}`)
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
                                onChange={updateTitle}

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
                                onChange={updateDetails}

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
                                onChange={updateCity}

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
                                onChange={updateState}

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
                                onChange={updateCountry}

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
                                onChange={updateUrl1}

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
                                onChange={updateUrl2}

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
                                onChange={updateUrl3}

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
                                onChange={updateUrl4}

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
                                onChange={updateUrl5}

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
                                onChange={updateAboutThisSpace}

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
                                onChange={updatePrice}
                                required
                            />
                        </label>
                    </div>
                    <div className='signup-button-div'>
                        <button type="submit" className='signup-button'>Edit Listing!</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default EditListing;