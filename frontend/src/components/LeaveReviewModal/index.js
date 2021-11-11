import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LeaveReview from './LeaveReview';

function LeaveReviewModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Leave a review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LeaveReview hideForm={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default LeaveReviewModal;
