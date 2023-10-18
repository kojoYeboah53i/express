const router = require('express').Router();
const knex = require('../../config/database')

const User = require('../controllers/user');
// const Meal = require('../controllers/meal');


router.post('/login', (res, req) => {User.loginUser()});
router.post('/register', (res, req) => {User.registerUser()});
// router.get('home', (res, req) => {Meal.getMeals()});
router.get('sandbox', (res, req) => {
    res.send('this is a sandbox')
});

router.get('/v1/getMeals', async(res, req) => {
      const meals = await knex('meals').select('*').orderBy('id', 'desc');
    //   console.log(meals);
      res.statusCode(200).json({meals: meals})
});



module.exports = router;