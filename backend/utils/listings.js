const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const id = check('id')
    .notEmpty()
    .isInt({ min: 0 });
const city = check('city')
    .notEmpty()
    .withMessage('Please enter a city')
const state = check('state')
    .notEmpty()
    .withMessage('Please enter a state')
const country = check('country')
    .notEmpty()
    .withMessage('Please enter a country')
const title = check('title')
    .notEmpty()
    .withMessage('Please enter a title')
const details = check('details')
    .notEmpty()
    .withMessage('Please enter details')
const aboutThisSpace = check('aboutThisSpace')
    .notEmpty()
    .withMessage('Please enter about this space')
const price = check('price')
    .notEmpty()
    .isInt({ min: 0 })
    .withMessage('Price must be a number');
const image1 = check('url1')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const image2 = check('url2')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const image3 = check('url3')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const image4 = check('url4')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const image5 = check('url5')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const review = check('review')
    .notEmpty()
    .withMessage('Please provide a review');


exports.validateCreate = [
    city,
    state,
    country,
    title,
    details,
    aboutThisSpace,
    price,
    image1,
    image2,
    image3,
    image4,
    image5,
    handleValidationErrors,
];

exports.validateUpdate = [
    id,
    city,
    state,
    country,
    title,
    details,
    aboutThisSpace,
    price,
    image1,
    image2,
    image3,
    image4,
    image5,
    handleValidationErrors,
];

exports.validateCreateReview = [
    review
]







// const validateSignup = [
//     check('email')
//         .exists({ checkFalsy: true })
//         .isEmail()
//         .withMessage('Please provide a valid email'),
//     check('username')
//         .exists({ checkFalsy: true })
//         .isLength({ min: 4 })
//         .withMessage('Please provide a username with at least 4 characters'),
//     check('username')
//         .not()
//         .isEmail()
//         .withMessage('Username cannot be an email'),
//     check('password')
//         .exists({ checkFalsy: true })
//         .isLength({ min: 6 })
//         .withMessage('Password must be 6 characters or more'),
//     check('confirmPassword')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a value for Confirm Password')
//         .isLength({ max: 50 })
//         .withMessage('Confirm Password must not be more than 50 characters long')
//         .custom((value, { req }) => {
//             if (value !== req.body.password) {
//                 // console.log("this is it", value)
//                 throw new Error('Confirm Password does not match Password');
//             }
//             return true;
//         }),
//     handleValidationErrors,
// ];