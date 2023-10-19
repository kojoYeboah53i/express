const router = require('express').Router();
const knex = require('../../config/database')

const User = require('../controllers/user');
const Order = require('../controllers/order');

router.post('/login', (res, req) => {User.loginUser()});


router.get('sandbox', (res, req) => {
  res.send('this is a sandbox')
});

router.get('/v1/getMeals', async(res, req) => {
  const meals = await knex('meals').select('*').orderBy('id', 'desc');
  //   console.log(meals);
  res.json({meals: meals})
});


router.get('/v1/get-all-orders/:username', Order.getOrders)
//get single order
router.get('/v1/get-order/:username/:orderId', Order.getOrderById)

router.post('/v1/createOrder', Order.createOrder);

router.delete('/v1/deleteOrder/:id', Order.deleteOrder)
//delete all orders
router.delete('/v1/deleteAllOrders', Order.deleteAllOrders)

router.patch('/v1/updateOrder/:id', Order.updateOrder )

router.get('/test-end',  Order.test)


module.exports = router;