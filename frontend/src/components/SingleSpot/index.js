import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import { getSingleSpot } from '../../store/spots';
import './SingleSpot.css';

function SingleSpot() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const spot = useSelector(state => state.spots[id])
    // const spotArray = Object.assign([], spot)
    console.log(spot)


    useEffect(() => {
        dispatch(getSingleSpot(id))
    }, [dispatch])


    return (
        <div className='single-spot-top-level-div'>
            <div className='single-spot-parent-container'>
                <div className='single-spot-title'>{spot?.title}</div>
                <div className='single-spot-location'>{spot?.city}, {spot?.state}, {spot?.country}</div>
                <div className='single-spot-parent-images'>
                    {spot?.Images.map(image => {
                        return <div className='single-spot-divs' key={image.id}>
                            <img src={image.url} className='single-spot-images' />
                        </div>
                    })}
                </div>
                <div className='single-spot-details'>{spot?.details}</div>
                <div className='single-spot-aboutThisSpace'>{spot?.aboutThisSpace}</div>
                {spot?.Reviews.map(review => {
                    return <div key={review.id} className='single-spot-reviews'>
                        {review.review}
                    </div>
                })}
            </div>
        </div>

    )
}

export default SingleSpot;