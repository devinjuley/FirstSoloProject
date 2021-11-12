import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewReview } from "../../store/spots";
import { useParams } from "react-router";


function LeaveReview({ hideForm }) {
    const sessionUser = useSelector(state => state?.session.user);
    const dispatch = useDispatch();
    const { id } = useParams()
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            review,
            userId: sessionUser.id,
            spotId: id
        }
        if (newReview.review.length > 0) {
            setErrors([]);
            let submittedReview = await dispatch(createNewReview(newReview))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                }
                );
            if (submittedReview) {
                hideForm()

            }
        } else {
            return setErrors(['Please provide a review'])
        }
    };


    return (
        <div className='leave-review-form'>
            <form onSubmit={handleSubmit} >
                <label>
                    <div className='title-handler-div'>
                        <div className='leave-a-review-title'>
                            Leave a review
                        </div>
                        <ul className='review-error-handler'>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                    </div>
                    <textarea className='leave-review-textarea'
                        type="text"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}

                    />
                </label>
                <div>
                    <button type="submit" className='leave-review-submit-button'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default LeaveReview;