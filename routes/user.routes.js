const router = require("express").Router();
const { isAuthenticated } = require('../middleware/jwt.middleware');
const User = require('../models/User.model');

router
.route('/')
.get((req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});


router
.route('/:id')
.get((req, res) => {

    const { id } = req.params;

    User
    .findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));

})
.put((req, res) => {

    const { id } = req.params;

    User
    .findByIdAndUpdate(id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
    
});

module.exports = router;
