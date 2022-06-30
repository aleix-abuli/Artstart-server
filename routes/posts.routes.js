const router = require("express").Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require('../middleware/jwt.middleware');

const Post = require('../models/Post.model');
const User = require('../models/User.model');


router
.route('/')
.get(isAuthenticated, (req, res) => {

    Post
    .find()
    .populate('owner')
    .then((posts) => res.status(201).json(posts))
    .catch((err) => res.status(500).json(err));

})
.post((req, res) => {

    Post
    .create({ description, imageArray, likes, genres }) //still missing owner and don't know about the image array
    .then(newPost => res.json(newPost))
    .catch(err => res.status(500).json(err));

});


router
.route('/:id')
.get((req, res) => {

    const { id } = req.params;

    Post
    .findById(id)
    .then(post => res.json(post))
    .catch(err => res.status(500).json(err));
})
.put((req, res) => {

    const { id } = req.params;

    Post
    .findByIdAndUpdate(id, req.body, { new: true }) // should I use the full req.body?? Think about this later
    .then(post => res.json(post))
    .catch(err => res.status(500).json(err));
});


router
.route('/like/:id')
.post(isAuthenticated, (req, res) => {

    const { id } = req.params;
    const userId = req.body._id;

    User
    .findByIdAndUpdate(userId, { $push: { likes: id } })
    .then((updatedUser) => res.status(201).json(updatedUser))
    .catch((err) => res.status(500).json(err));

});

module.exports = router;
