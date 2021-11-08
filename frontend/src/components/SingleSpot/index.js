import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getSingleSpot } from '../../store/spots';
import './SingleSpot.css';

function SingleSpot() {
    const dispatch = useDispatch()
    const spot = useSelector(state => state.spots)
    console.log(spot)

    useEffect(() => {
        dispatch(getSingleSpot())
    }, [dispatch])
    return (
        <div>
            <div>Single Spot Placeholder</div>
            <div>Single Spot Placeholder</div>
            <div>Single Spot Placeholder</div>
            <div>Single Spot Placeholder</div>
            <div>Single Spot Placeholder</div>
        </div>

    )
}

export default SingleSpot;