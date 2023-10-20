const router = require('express').Router();
const knex = require('../../config/database')

const User = require('../controllers/user');
const Order = require('../controllers/order');
const Meal = require('../controllers/meal');

router.post('/login', (res, req) => {User.loginUser()});


router.get('sandbox', (res, req) => {
  res.send('this is a sandbox')
});

//orders
router.get('/v1/getOrders/:username', Order.getOrders)
//get single order
router.get('/v1/get-order/:username/:orderId', Order.getOrderById)

router.post('/v1/createOrder', Order.createOrder);

router.delete('/v1/deleteOrder/:id', Order.deleteOrder)
//delete all orders
router.delete('/v1/deleteAllOrders', Order.deleteAllOrders)

router.patch('/v1/updateOrder/:id', Order.updateOrder )

router.get('/test-end',  Order.test)

//meals
router.get('/v1/getMeals', Meal.getMeals)
router.get('/v1/getMeal/:id', Meal.getMealById)
router.post('/v1/createMeal', Meal.createMeal)
router.delete('/v1/deleteMeal/:id', Meal.deleteMeal)
router.patch('/v1/updateMeal/:id', Meal.updateMeal)
router.get('/test-meal',  Meal.test)
router.get('/test-meal-order/:username',  Meal.getOrders)



module.exports = router;