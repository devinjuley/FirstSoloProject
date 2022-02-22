const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image, Review } = require('../../db/models');
const listingValidations = require('../../utils/listings')


const router = express.Router();

router.delete("/:id", asyncHandler(async function (req, res) {
    const id = req.params.id
    const review = await Review.findByPk(id)
    await review.destroy()
    return res.json(review)
}))





module.exports = router;