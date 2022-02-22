const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image, Review } = require('../../db/models');
const listingValidations = require('../../utils/listings')


const router = express.Router();






module.exports = router;