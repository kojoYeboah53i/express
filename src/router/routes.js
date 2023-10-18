const router = require('express').Router();

const User = require('../controllers/user');
// const Meal = require('../controllers/meal');


router.post('/login', (res, req) => {User.loginUser()});
router.post('/register', (res, req) => {User.registerUser()});
// router.get('home', (res, req) => {Meal.getMeals()});
router.get('sandbox', (res, req) => {
    res.send('this is a sandbox')
});





module.exports = router;