const router = require("express").Router();
const Controller= require('../controller/CartController')
const {verifyTokenAndAuthorization , verifyTokenAndAdmin}= require('../routes/verifyToken')

// Get all carts for Admin
router.get('/cart/', verifyTokenAndAdmin, Controller.GetCartList)

// Get users cart list
router.get('/cart/:userId', verifyTokenAndAuthorization, Controller.GetUserCart)

// Add cart item
router.post('/cart',verifyTokenAndAuthorization, Controller.AddCartItem)

// Update cart
router.put('/cart/:id',verifyTokenAndAuthorization, Controller.UpdateCart)

// Delete cart item
router.delete('/cart/:id',verifyTokenAndAuthorization, Controller.DeleteCartItem)


module.exports = router;