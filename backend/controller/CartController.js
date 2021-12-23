const Cart = require('../models/Cart')


class CartController{
    
        UpdateCart =async(req,res)=>{
            
           
            try {
                console.log("body", req.body.products)
                const updatedCart = await Cart.findOneAndUpdate({userId: req.params.id},{ $set: {products: req.body.products}})
               
                res.status(200).json(updatedCart)

            } catch (error) {
                res.status(500).json(error.message)
            }
    }
      
        AddCart=async(req,res)=>{
                
            const newCartItem = new Cart(req.body)

            try {
                const savedCartItem = await newCartItem.save()
                res.status(200).json(savedCartItem)
            } catch (error) {
                res.status(401).json(error.message)
            }
        }

        DeleteCartItem = async(req,res)=>{
            try {
                await Cart.findByIdAndDelete(req.params.id)

                res.status(200).json("Cart item has been deleted")

            } catch (error) {
                res.status(500).json(error)
            }   
        }


        GetUserCart = async(req,res)=>{
            try {
                const cart = await Cart.findOne({userId: req.params.id})

                res.status(200).json(cart)

                

            } catch (error) {
                res.status(500).json(error.message)
            }   
        }

    GetCartList = async(req,res)=>{

        try {
            const carts = await Cart.find()
            res.status(200).json(carts)
        } catch (error) {
            res.status(500).json(error.message)
        }

    }
}



module.exports = new CartController;