const router = require('express').Router();
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const postRoutes = require('./posts.routes');
const collectionRoutes = require('./collections.routes');
const genreRoutes = require('./genres.routes');
const commentRoutes = require('./comments.routes');
const uploadRoutes = require('./upload.routes');

router.get('/', (req, res) => {res.json('Welcome to Artstart Server.')});

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/collections', collectionRoutes);
router.use('/genres', genreRoutes);
router.use('/comments', commentRoutes);
router.use('/auth', authRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;
