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
    await Review.create({
        review,
        spotId,
        userId
    })
    const spot = await Spot.findByPk(spotId, {
        include: [
            Image,
            User,
            {
                model: Review,
                include: [User]
            }
        ]
    })
    return res.json(spot)
}))

module.exports = router;