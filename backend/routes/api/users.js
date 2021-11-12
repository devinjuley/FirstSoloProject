const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email'),
    check('photoUrl')
        .notEmpty()
        .isURL({ require_protocol: false, require_host: false })
        .withMessage('Please provide a valid URL address'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .isLength({ max: 50 })
        .withMessage('Confirm Password must not be more than 50 characters long')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                // console.log("this is it", value)
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        }),
    handleValidationErrors,
];

// Sign up
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    console.log(req.body)
    const { email, password, username, photoUrl } = req.body;
    const user = await User.signup({ email, username, password, photoUrl });

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
}),
);


module.exports = router;