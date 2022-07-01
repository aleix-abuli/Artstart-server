const router = require("express").Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require('../middleware/jwt.middleware');

const Collection = require('../models/Collection.model');
const User = require('../models/User.model');

router
.route('/')
.post(isAuthenticated, (req, res) => {

    const { title, description, postToSave } = req.body;
    const owner = req.payload._id;

    Collection
    .create({ title, description, owner })
    .then((newColl) => {

        if(postToSave) {
            Collection
            .findByIdAndUpdate(newColl._id, { $push: { items: postToSave } })
        };
        
        User
        .findByIdAndUpdate(owner, { $push: { collections: newColl._id } })
        .then((__) => res.status(201).json(newColl));

    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });

});


module.exports = router;
