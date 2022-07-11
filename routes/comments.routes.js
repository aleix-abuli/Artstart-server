const router = require("express").Router();
const { isAuthenticated } = require('../middleware/jwt.middleware');

const Comment = require('../models/Comment.model');
const Post = require("../models/Post.model");
const Collection = require('../models/Collection.model');


router
.route('/:id')
.put(isAuthenticated, (req, res) => {

    const id = req.body._id; 

    Comment
    .findByIdAndUpdate(id, req.body, {new: true})
    .then((updatedComment) => res.status(201).json(updatedComment))
    .catch((err) => res.status(500).json(err));

})
.delete(isAuthenticated, (req, res) => {

    const { id } = req.params;

    Comment
    .findByIdAndDelete(id)
    .then((deletedComment) => {
        res.status(201).json(deletedComment);
    })
    .catch((err) => console.log(err));

});


router
.route('/posts')
.post(isAuthenticated, (req, res) => {

    const { message, owner, post } = req.body;

    Comment
    .create({ message, owner })
    .then((newComment) => {

        Post
        .findByIdAndUpdate(post, { $push: { comments: newComment._id } }, { new: true })
        .populate({
            path: 'comments',
            populate: {
                path: 'owner'
            }
        })
        .then((updatedPost) => res.status(201).json(updatedPost.comments));

    })
    .catch((err) => res.status(500).json(err));

});


router
.route('/collections')
.post(isAuthenticated, (req, res) => {

    const { message, owner, collection } = req.body;

    Comment
    .create({ message, owner })
    .then((newComment) => {

        Collection
        .findByIdAndUpdate(collection, { $push: { comments: newComment._id } }, { new: true })
        .populate({
            path: 'comments',
            populate: {
                path: 'owner'
            }
        })
        .then((updatedCollection) => res.status(201).json(updatedCollection.comments));

    })
    .catch((err) => res.status(500).json(err));

});

module.exports = router;
