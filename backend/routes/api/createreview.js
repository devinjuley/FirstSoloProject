const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image, Review } = require('../../db/models');
const listingValidations = require('../../utils/listings')


const router = express.Router();

router.post('/', restoreUser, listingValidations.validateCreateReview, asyncHandler(async (req, res) => {
    const { review, spotId, userId } = req.body;
    const newReview = await Review.create({
        review,
        spotId,
        userId
    })
    return res.json(newReview)
}))

module.exports = router;