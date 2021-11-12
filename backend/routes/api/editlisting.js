const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image, Review } = require('../../db/models');
const listingValidations = require('../../utils/listings')


const router = express.Router();

//get edit listing page
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id, {
        include: [User, Image, Review]
    })
    return res.json(spot)
}))

//edit listing
router.put('/:id(\\d+)', listingValidations.validateUpdate, restoreUser, asyncHandler(async (req, res) => {

    const { userId, city, state, country, title, details, aboutThisSpace, price, url1, url2, url3, url4, url5 } = req.body;
    const spot = await Spot.findByPk(req.params.id, {
        include: [
            Image,
            User,
            {
                model: Review,
                include: [User]
            }
        ]
    })
    spot.update({
        userId,
        city,
        state,
        country,
        title,
        details,
        aboutThisSpace,
        price,
    })
    const images = await Image.findAll({
        where: {
            spotId: req.params.id
        }
    })

    const image1 = await images[0].update({
        url: url1
    })
    const image2 = await images[1].update({
        url: url2
    })
    const image3 = await images[2].update({
        url: url3
    })
    const image4 = await images[3].update({
        url: url4
    })
    const image5 = await images[4].update({
        url: url5
    })


    return res.json({
        spot,
        image1,
        image2,
        image3,
        image4,
        image5,
    })
}))



module.exports = router;