const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');
const { Op } = require('sequelize');
const { User, Spot, Image } = require('../../db/models');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
        include: [User, Image],
        order: [['createdAt', 'DESC']]

    })
    return res.json(spots)
}))

router.get('/:searchTerm', asyncHandler(async (req, res) => {
    const { searchTerm } = req.params
    const spots = await Spot.findAll({
        where: {
            city: {
                [Op.iLike]: `%${searchTerm}%`
            }
        },
        include: [User, Image]
    })
    return res.json(spots)
}))

module.exports = router;