const router = require("express").Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require('../middleware/jwt.middleware');

const Genre = require('../models/Genre.model');

router
.route('/')
.get((req, res) => {

    Genre
    .find()
    .populate('items')
    .then((genres) => res.status(201).json(genres))
    .catch((err) => res.status(500).json(err));

})


module.exports = router;
