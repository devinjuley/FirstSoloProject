const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const id = check('id')
    .notEmpty()
    .isInt({ min: 0 });
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
const image1 = check('url1')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false });
const image2 = check('url2')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false });
const image3 = check('url3')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false });
const image4 = check('url4')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false });
const image5 = check('url5')
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







