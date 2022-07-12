const router = require("express").Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require('../middleware/jwt.middleware');

const User = require('../models/User.model');


router
.route('/')
.get((req, res) => {

    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));

});


router
.route('/:id')
.get((req, res) => {

    const { id } = req.params;

    User
    .findById(id)
    .populate('posts')
    .populate({
        path: 'likes',
        populate: {
            path: 'owner'
        }
    })
    .populate('collections')
    .populate('following')
    .then(user => res.json(user))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)});

})
.put((req, res) => {

    const { id } = req.params;

    User
    .findByIdAndUpdate(id, req.body, { new: true })
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json(err));

});


router
.route('/follow/:id')
.post(isAuthenticated, (req, res) => {

    const { id } = req.params;
    const user = req.body._id;

    User
    .findByIdAndUpdate(id, { $push: { followedBy: user } }, {new: true})
    .then((updatedUser) => {
        User
        .findByIdAndUpdate(user, { $push: { following: updatedUser._id } }, {new: true})
        .then((updatedUser2) => res.status(201).json(updatedUser2));
    })
    .catch((err) => res.status(500).json(err));
});


router
.route('/unfollow/:id')
.post(isAuthenticated, (req, res) => {

    const { id } = req.params;
    const user = req.body._id;

    User
    .findByIdAndUpdate(id, { $pull: { followedBy: user } }, {new: true})
    .then((updatedUser) => {
        User
        .findByIdAndUpdate(user, { $pull: { following: updatedUser._id } }, {new: true})
        .then((updatedUser2) => res.status(201).json(updatedUser2));
    })
    .catch((err) => res.status(500).json(err));
});


router
.route('/following/:id')
.get(isAuthenticated, (req, res) => {

    const { id } = req.params;

    User
    .findById(id)
    .populate({
        path: 'following',
        populate: {
            path: 'posts',
            populate: {
                path: 'owner'
            }
        }
    })
    .then((user) => {
        
        const postArray = [];

        user.following.forEach((followee) => {
            followee.posts.forEach((post) => postArray.push(post));
        });

        return res.status(201).json(postArray);

    })
    .catch((err) => res.status(500).json(err));

});

module.exports = router;
