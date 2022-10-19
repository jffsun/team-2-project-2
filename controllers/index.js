const router = require('express').Router();
const login = require('./login.js')
const apiRoutes = require('./api');

router.get('/', (req, res) => {
    res.render('login');
});
router.use('/login', login);
router.use('/api', apiRoutes);

module.exports = router;