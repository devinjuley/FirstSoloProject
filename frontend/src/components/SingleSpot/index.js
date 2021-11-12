import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getSingleSpot, deleteListing } from '../../store/spots';
import LeaveReview from '../LeaveReviewModal';
import './SingleSpot.css';

function SingleSpot() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const spot = useSelector(state => state?.spots[id])
    const sessionUser = useSelector(state => state?.session.user);
    // console.log("session user", sessionUser)
    // console.log("spot user", spot.id)
    // const getReviews = useSelector(state => state)
    // console.log(getReviews)
    const handleDelete = (id) => {
        dispatch(deleteListing(id));
        history.push('/')
    };

    let editLink;
    let deleteLink;
    if (sessionUser?.id === spot?.userId) {
        editLink = (
            <a href={`/editlisting/${spot?.id}`} className='single-spot-edit-button'>edit listing</a>
        )
        deleteLink = (
            <span>•
                <button onClick={() => handleDelete(id)} className='single-spot-delete-button'>remove listing</button>
            </span>
        )
    }

    let leaveAReview;
    if (sessionUser) {
        leaveAReview = (
            <LeaveReview />
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


                <div className='single-spot-location'>{spot?.city}, {spot?.state}, {spot?.country} {deleteLink}</div>

                <div className='single-spot-parent-images'>
                    {spot?.Images.map(image => {
                        return <img src={image.url} className='single-spot-images' key={image.id} />

                        // return <div className='single-spot-divs' key={image.id}>
                    })}
                </div>

                <div className='single-spot-under-pics-parent'>
                    <div className='single-spot-under-pics'>
                        <div className='single-spot-hosted-and-pic'>
                            <div className='single-spot-host'>Entire rental unit hosted by {spot?.User.username}</div>
                            <span className='spot-user-headshot-span'><img src={spot?.User.photoUrl} className='spot-user-headshot'></img></span>
                        </div>
                        <div className='single-spot-details'>{spot?.details} {editLink}</div>
                        <div className='single-spot-about-this-space'>About this Space</div>
                        <div className='single-spot-aboutThisSpace'>{spot?.aboutThisSpace}</div>
                        <div className='what-this-place-offers'>What this place offers</div>
                        <div className='offerings-parent-div'>
                            <div className='offerings-inner-divs'>Kitchen</div>
                            <div className='offerings-inner-divs'>Free street parking</div>
                            <div className='offerings-inner-divs'>Backyard</div>
                            <div className='offerings-inner-divs'>Refrigerator</div>
                            <div className='offerings-inner-divs'>Dedicated workspace</div>
                            <div className='offerings-inner-divs'>Wifi</div>
                            <div className='offerings-inner-divs'>TV with standard cable</div>
                            <div className='offerings-inner-divs'>Hair dryer</div>
                            <div className='offerings-inner-divs'>Microwave</div>
                            <div className='offerings-inner-divs'>Long term stays allowed</div>
                        </div>
                        <div className='other-features-parent'>
                            <div className='other-features-inner-divs-title'>Entire home
                                <div className='other-features-inner-divs-content'>You’ll have the guesthouse to yourself.</div>
                            </div>
                            <div className='other-features-inner-divs-title'>Enhanced Clean
                                <div className='other-features-inner-divs-content'>This Host committed to Airbnb's 5-step enhanced cleaning process.</div>
                            </div>
                            <div className='other-features-inner-divs-title'>Self Check-in
                                <div className='other-features-inner-divs-content'>Check yourself in with the lockbox.</div>
                            </div>
                            <div className='other-features-inner-divs-title'>Great location
                                <div className='other-features-inner-divs-content'>100% of recent guests gave the location a 5-star rating.</div>
                            </div>
                        </div>
                    </div>
                    <div className='single-spot-price-parent'>
                        <div className='single-spot-price'>
                            <div className='single-spot-price-per-night'>${spot?.price} / night</div>
                            <div className='checkin-checkout-guests-parent'>
                                <div className='checkin-div'>CHECK-IN</div>
                                <div className='checkout-div'>CHECKOUT</div>
                                <div className='guests-div'>GUESTS</div>
                            </div>
                            <button className='check-avail-button'>Check Availability</button>
                        </div>
                    </div>


                </div>
                {/* <div className='single-spot-reviews'>Reviews</div> */}
                {leaveAReview}
                <div className='single-spot-reviews-container'>
                    {spot?.Reviews.map(review => {
                        return <div key={review?.id} className='single-spot-reviews'>
                            <div className='username-and-photo'>
                                <img src={review?.User?.photoUrl} className='review-user-headshot' />
                                <span className='review-username'>{review?.User?.username}</span>
                            </div>
                            <div className='review-div'> {review?.review} </div>
                        </div>
                    })}
                </div>

            </div>
        </div>

    )
}

export default SingleSpot;