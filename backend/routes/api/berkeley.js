const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image } = require('../../db/models');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
        where: {
            city: 'Berkeley'
        },
        include: [User, Image],
        order: [['createdAt', 'DESC']]
    })
    return res.json(spots)
}))

module.exports = router;