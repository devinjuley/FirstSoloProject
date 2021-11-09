const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const city = check('city')
    .notEmpty()
const state = check('state')
    .notEmpty()
const country = check('country')
    .notEmpty()
const title = check('title')
    .notEmpty()
const details = check('details')
    .notEmpty()
const aboutThisSpace = check('aboutThisSpace')
    .notEmpty()
const price = check('price')
    .notEmpty()
    .isInt({ min: 0 });
const image = check('url')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false });


exports.validateCreate = [
    city,
    state,
    country,
    title,
    details,
    aboutThisSpace,
    price,
    image,
    handleValidationErrors,
];







