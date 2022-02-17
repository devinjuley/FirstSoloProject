import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ReviewComponent = ({ review }) => {
    const dispatch = useDispatch()



    return (
        <div key={review?.id} className='single-spot-reviews'>
            <div className='username-and-photo'>
                <img src={review?.User?.photoUrl} className='review-user-headshot' />
                <span className='review-username'>{review?.User?.username}</span>
            </div>
            <div className='review-div'> {review?.review} </div>
        </div>
    )

}

export default ReviewComponent;