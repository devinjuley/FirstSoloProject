import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LeaveReview from './LeaveReview';
import './LeaveReview.css'

function LeaveReviewModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className='leave-review'>Leave a review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LeaveReview hideForm={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default LeaveReviewModal;
