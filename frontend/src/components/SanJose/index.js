import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getSanJoseSpots } from '../../store/spots';
import '../Berkeley/Berkeley.css';

function SanJose() {
    const spots = useSelector(state => state.spots)

    const spotsArray = Object.assign([], spots)



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSanJoseSpots());
    }, [dispatch])

    return (
        <div className='top-level-div'>
            <div className='berkeley-spots-parent-container'>
                <div className='san-francisco-location-title'>Stays in San Jose</div>
                {spotsArray.map(spot => {
                    return <div className='berkeley-spots-div' key={spot.id}>
                        <div>
                            <a href='/'  >
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406261.5010021851!2d-122.09760958761423!3d37.29707776166299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1636407902819!5m2!1sen!2sus" className='berkeley-map'></iframe>
            </div>
        </div>
    )
}

export default SanJose;