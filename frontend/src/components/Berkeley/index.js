import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getBerkeleySpots } from '../../store/spots';
import './Berkeley.css';

function Berkeley() {

    const spots = useSelector(state => state.spots)

    const spotsArray = Object.assign([], spots)



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBerkeleySpots());
    }, [dispatch])
    console.log('this is it', spotsArray)
    return (
        <div>
            <div className='berkeley-spots-parent-container'>
                <div className='san-francisco-location-title'>Stays in San Francisco</div>
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
        </div>
    )
}

export default Berkeley;