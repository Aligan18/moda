const router = require("express").Router();
const Controller= require('../controller/CartController')
const {verifyTokenAndAuthorization , verifyTokenAndAdmin}= require('../service/verifyToken')

// Get all carts for Admin
router.get('/cart', verifyTokenAndAdmin, Controller.GetCartList)

// Get users cart list
router.get('/cart/find/:id', verifyTokenAndAuthorization, Controller.GetUserCart)

// Add cart item
router.post('/cart', Controller.AddCart)

// Update cart
router.put('/cart/find/:id', Controller.UpdateCart) //verifyTokenAndAuthorization

// Delete cart item
router.delete('/cart/:id',verifyTokenAndAuthorization, Controller.DeleteCartItem)


module.exports = router;