import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ReviewComponent = ({ review }) => {
    const dispatch = useDispatch()
    const [showEditBox, setShowEditBox] = useState(false)
    const [textContent, setTextContent] = useState(review?.review)

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

    return (
        <div key={review?.id} className='single-spot-reviews'>
            <div className='username-and-photo'>
                <img src={review?.User?.photoUrl} className='review-user-headshot' />
                <span className='review-username'>{review?.User?.username}</span>
            </div>
            {!showEditBox && (<div className='review-div'> {review?.review} </div>)}
            {showEditBox && (
                <form onSubmit={handleEditSubmission} className=''>
                    <input
                        type='text'
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                        className=''
                    />
                </form>
            )}
            {!showEditBox && (<div className='edit-button-dropdown' onClick={() => setShowEditBox(true)}>
                <img src='https://media.discordapp.net/attachments/921246913167245363/922208971253751838/unknown.png' className='edit-pencil-icon' alt='' />
                Edit</div>)}
            {showEditBox && (<div className='edit-button-dropdown' onClick={() => setShowEditBox(false)}>
                <img src='https://media.discordapp.net/attachments/921246913167245363/922283242713935882/unknown.png' className='edit-pencil-icon' alt='' />
                Cancel</div>)}
        </div>
    )

}

export default ReviewComponent;