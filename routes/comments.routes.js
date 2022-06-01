const router = require("express").Router();
const { isAuthenticated } = require('../middleware/jwt.middleware');
const Comment = require('../models/Comment.model');

router
.route('/')

module.exports = router;
