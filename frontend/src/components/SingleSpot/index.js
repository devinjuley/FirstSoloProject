import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getSingleSpot, deleteListing } from '../../store/spots';
import './SingleSpot.css';

function SingleSpot() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const spot = useSelector(state => state.spots[id])
    const sessionUser = useSelector(state => state.session.user);
    // console.log("session user", sessionUser)
    // console.log("spot user", spot.id)

    const handleDelete = (id) => {
        dispatch(deleteListing(id));
        history.push('/')
    };

    let editLink;
    let deleteLink;
    if (sessionUser.id === spot?.User.id) {
        editLink = (
            <a href={`/editlisting/${spot.id}`} className='single-spot-edit-button'>edit listing</a>
        )
        deleteLink = (
            <button onClick={() => handleDelete(id)} className='single-spot-delete-button'>delete listing</button>
        )
    }
    // console.log("this is spot", spot)
    useEffect(() => {
        dispatch(getSingleSpot(id))
    }, [dispatch])


    return (
        <div className='single-spot-top-level-div'>
            <div className='single-spot-parent-container'>
                <div className='single-spot-title'>{spot?.title}</div>
                {editLink}
                {deleteLink}
                <div className='single-spot-location'>{spot?.city}, {spot?.state}, {spot?.country}</div>
                <div className='single-spot-parent-images'>
                    {spot?.Images.map(image => {
                        return <div className='single-spot-divs' key={image.id}>
                            <img src={image.url} className='single-spot-images' />
                        </div>
                    })}
                    <div className='single-spot-price'>
                        <div className='single-spot-price-per-night'>${spot?.price} / night</div>
                        <button className='check-avail-button'>Check Availability</button>
                    </div>
                </div>
                <div className='single-spot-under-pics-parent'>
                    <div className='single-spot-under-pics'>
                        <div className='single-spot-host'>Entire rental unit hosted by {spot?.User.username}</div>
                        <div className='single-spot-details'>{spot?.details}</div>
                        <div className='single-spot-about-this-space'>About this Space</div>
                        <div className='single-spot-aboutThisSpace'>{spot?.aboutThisSpace}</div>
                    </div>
                </div>
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