const router = require('express').Router();

const User = require('../controllers/user');


router.post('/login', (res, req) => {User.loginUser()});
router.post('/login', (res, req) => {User.registerUser()});




module.exports = router;