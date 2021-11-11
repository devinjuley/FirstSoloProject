import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createNewReview } from "../../store/spots";
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';

function LeaveReview({ hideForm }) {
    const sessionUser = useSelector(state => state?.session.user);
    const dispatch = useDispatch();
    const { id } = useParams()
    const history = useHistory()
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            review,
            userId: sessionUser.id,
            spotId: id
        }

        setErrors([]);
        let submittedReview = await dispatch(createNewReview(newReview)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        }
        );
        if (submittedReview) {
            hideForm()
            // history.push(`/spot/${id}`)
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                Leave a review
                <textarea
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default LeaveReview;