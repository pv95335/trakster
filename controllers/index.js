const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const postRoutes = require('./post-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/post', postRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router; 