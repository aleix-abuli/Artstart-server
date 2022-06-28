const router = require("express").Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require('../middleware/jwt.middleware');

const Genre = require('../models/Genre.model');
const Post = require('../models/Post.model');

router
.route('/')
.get((req, res) => {

    Genre
    .find()
    .populate('items')
    .then((genres) => res.status(201).json(genres))
    .catch((err) => res.status(500).json(err));

})


router
.route('/:genre')
.get((req, res) => {

    const { genre } = req.params;

    Genre
    .find({ genre: genre })
    .populate({
        path: 'items',
        populate: {
            path: 'owner'
        }
    })
    .then((genreDB) => res.status(201).json(genreDB))
    .catch((err) => console.log(err));

});


module.exports = router;
