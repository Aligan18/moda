const router = require("express").Router();
const { route } = require("express/lib/application");
const Controller= require('../controller/ProductController')
const {verifyTokenAndAuthorization , verifyTokenAndAdmin} = require('../service/verifyToken')

router.post('/product',verifyTokenAndAdmin, Controller.AddProduct)
// Get product by id
router.get('/product/find/:id', Controller.GetProduct )
//Get all products by category
router.get('/product/category/find', Controller.GetAllProductByCategory)
//Get all products by product name
router.get('/product/search/find/', Controller.GetAllProductByName)
// Update product info
router.put('/product/update/:id',verifyTokenAndAdmin, Controller.UpdateProduct)
// Delete product
router.delete('/product/delete/:id',verifyTokenAndAdmin, Controller.DeleteProduct)


module.exports = router;