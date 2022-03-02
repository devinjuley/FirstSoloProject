import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/spots';


const ReviewComponent = ({ review }) => {
    const dispatch = useDispatch()
    const [showEditBox, setShowEditBox] = useState(false)
    const [textContent, setTextContent] = useState(review?.review)
    const sessionUser = useSelector(state => state?.session.user);

    const handleEditSubmission = (e) => {
        // e.preventDefault()
        // const editedPost = {
        //     id: post.id,
        //     userId: sessionUser.id,
        //     content: textContent
        // }

        // dispatch(editPostThunk(editedPost))
        // setShowEditBox(false)
    }
    const handleDelete = () => {
        dispatch(deleteReview(review.id))
    };

    return (
        <div key={review?.id} className='single-spot-reviews'>
            <div className='username-and-photo'>
                <img src={review?.User?.photoUrl} className='review-user-headshot' />
                <span className='review-username'>{review?.User?.username}</span>
            </div>
            {!showEditBox && (<div className='review-div'> {review?.review} </div>)}
            {showEditBox && (
                <form onSubmit={handleEditSubmission} className=''>
                    <textarea
                        type='text'
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                        className='input-box-for-edit'
                    />
                </form>
            )}
            <div className='edit-cancel-delete-button-parent'>
                {sessionUser?.id == review?.userId && (!showEditBox && (<div className='div-around-edit' onClick={() => setShowEditBox(true)}>
                    <img src='https://media.discordapp.net/attachments/921246913167245363/922208971253751838/unknown.png' className='edit-pencil-icon' alt='' />
                    Edit</div>))}
                {showEditBox && (<div className='dit-around-cancel' onClick={() => setShowEditBox(false)}>
                    <img src='https://media.discordapp.net/attachments/921246913167245363/922283242713935882/unknown.png' className='edit-pencil-icon' alt='' />
                    Cancel</div>)}
                {sessionUser?.id == review?.userId && (<div className='div-around-delete' onClick={handleDelete}>
                    <img src='https://media.discordapp.net/attachments/921246913167245363/922209557898465280/unknown.png' className='delete-trashcan-icon' alt='' />
                    Delete</div>)}
            </div>
        </div>
    )

}

export default ReviewComponent;