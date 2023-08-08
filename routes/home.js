
const express = require('express');

const {
    getFlowers
} = require('../controllers/imagesController');

const router = express.Router();

router.get('/', getFlowers);

module.exports = router