import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getBerkeleySpots } from '../../store/spots';
import './Berkeley.css';

function Berkeley() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBerkeleySpots());
    }, [dispatch])
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
            <div>Berkeley Spots</div>
        </div>
    )
}

export default Berkeley;