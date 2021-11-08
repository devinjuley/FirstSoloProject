const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image, Review } = require('../../db/models');


const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id, {
        include: [User, Image, Review]
    })
    return res.json(spot)
}))

module.exports = router;