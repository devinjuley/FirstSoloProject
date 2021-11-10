const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image } = require('../../db/models');
const listingValidations = require('../../utils/listings')


const router = express.Router();

router.post('/', listingValidations.validateCreate, restoreUser, asyncHandler(async (req, res) => {
    // console.log('this is it', req.user)
    const { userId, city, state, country, title, details, aboutThisSpace, price, url1, url2, url3, url4, url5 } = req.body;
    const spot = await Spot.create({
        userId,
        city,
        state,
        country,
        title,
        details,
        aboutThisSpace,
        price
    })
    const image1 = await Image.create({
        spotId: spot.id,
        url: url1
    })
    const image2 = await Image.create({
        spotId: spot.id,
        url: url2
    })
    const image3 = await Image.create({
        spotId: spot.id,
        url: url3
    })
    const image4 = await Image.create({
        spotId: spot.id,
        url: url4
    })
    const image5 = await Image.create({
        spotId: spot.id,
        url: url5
    })

    // await setTokenCookie(res, spot);
    // await setTokenCookie(res, image1);
    // await setTokenCookie(res, image2);
    // await setTokenCookie(res, image3);
    // await setTokenCookie(res, image4);
    // await setTokenCookie(res, image5);

    return res.json({
        spot,
        image1,
        image2,
        image3,
        image4,
        image5
    })
}))

module.exports = router;