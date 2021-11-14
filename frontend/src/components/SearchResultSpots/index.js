import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getSearch } from '../../store/spots';
import { useParams } from 'react-router';
import '../Berkeley/Berkeley.css';

function SearchResultSpots() {
    const { searchTerm } = useParams()
    const spots = useSelector(state => state.spots)
    console.log('inside search result', spots)
    const spotsArray = Object.assign([], spots)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearch(searchTerm));
    }, [dispatch])

    return (
        <div className='top-level-div'>
            <div className='berkeley-spots-parent-container'>
                <div className='san-francisco-location-title'>{`All stays in ${searchTerm}`}</div>
                {spotsArray.map(spot => {
                    return <div className='berkeley-spots-div' key={spot.id}>
                        <div>
                            <a href={`/spot/${spot.id}`}  >
                                <img src={spot.Images[0].url} alt='spot-image' className='berkeley-main-images' />
                            </a>
                        </div>
                        <div className='berkeley-spots-info-div'>
                            <div className='berkeley-spots-title'>{spot.title}</div>

                            <div className='berkeley-spots-details'>{spot.details}</div>

                            <div className='berkeley-spots-price'>${spot.price} / night</div>
                        </div>
                    </div>


                })}
            </div>
            <div className='berkeley-map-parent-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361348.14090973!2d-113.75721884302386!3d36.240999911993384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1636756177169!5m2!1sen!2sus" className='berkeley-map'></iframe>
            </div>
        </div>
    )
}

export default SearchResultSpots;