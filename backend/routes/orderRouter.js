const router = require("express").Router();
const Controller= require('../controller/OrderController')
const {verifyTokenAndAuthorization , verifyTokenAndAdmin}= require('../routes/verifyToken')

// User create order
router.post('/order',verifyTokenAndAuthorization, Controller.CreatOrder)

// Admin update order
router.put('/order/update:id', verifyTokenAndAdmin, Controller.UpdateOrder)

// Admin Delete order
router.delete('/order/delete/:id', verifyTokenAndAdmin, Controller.DeleteOrder)

// User sees his order
router.get('/order/find/:userId',verifyTokenAndAuthorization, Controller.GetUserOrder)

// Admin sees all user orders
router.get('/order/find',verifyTokenAndAdmin, Controller.GetAllOrders)

// Admin can sees monthly income
router.get('/order/income',verifyTokenAndAdmin, Controller.GetIncome)


module.exports = router;