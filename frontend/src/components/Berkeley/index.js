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
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            <div>Berkeley Spots</div>
            {spotsArray.map(spot => {
                return <a href='/' className='berkeley-spots-div'>
                    <div>
                        <img src={spot.Images[0].url} alt='spot-image' className='berkeley-main-images' />
                        {spot.title}
                        {spot.details}
                        {spot.price}
                    </div>
                </a>
            })}
        </div>
    )
}

export default Berkeley;