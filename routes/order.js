//require express
const express = require("express");
const { getOrder, addOrder, updateOrder } = require("../controllers/order");

//reqquire router
const router = express.Router();

/**
 * @desc : Route Get All Orders
 * @path : 'http://localhost:8000/api/order/'
 * @method : GET
 * @data : No Data
 */
router.get('/', getOrder)

/**
 * @desc : Route Add New Order
 * @path : 'http://localhost:8000/api/order/add'
 * @method : POST
 * @data : req.body
 */
 router.post('/add',addOrder)

 /**
 * @desc : Route Update Order
 * @path : 'http://localhost:8000/api/order/update'
 * @method : Put
 * @data : req.body , req.params
 */
  router.put('/update/:id',updateOrder)



 module.exports = router;