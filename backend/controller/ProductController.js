const Product = require('../models/Product')
const FileService = require('../service/FileService')

class ProductController{
    
    UpdateProduct =async(req,res)=>{
        
        
        try {
            const updatedProduct= await Product.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },{new: true})

            res.status(200).json(updatedProduct)

        } catch (error) {
            res.status(500).json(error.message)
        }
   }
      
   AddProduct =async(req,res)=>{
       
        const fileName = FileService.saveFile(req.files.img)
        const product = {...req.body,img: fileName }
       const newProduct = new Product(product)  

       try {

           const savedProduct = await newProduct.save()
           res.status(200).json(savedProduct)
       } catch (error) {
           res.status(401).json(error.message)
       }
    }

    DeleteProduct = async(req,res)=>{
        try {
            const product = await Product.findById(req.params.id)
            
            FileService.deletFile(product.img)

            await Product.findByIdAndDelete(req.params.id)

            res.status(200).json("Product has been deleted")

        } catch (error) {
            res.status(500).json(error)
        }   
    }

    GetProduct = async(req,res)=>{
        try {
            
            const product = await Product.findById(req.params.id)
         
            res.status(200).json(product)

            

        } catch (error) {
            res.status(500).json(error.message)
        }   
    }

    GetAllProductByCategory = async(req,res)=>{

            const qNew = req.query.new 
            const qCategory = req.query.category
            

        try {
            let products ;
            if(qNew && qCategory ){
                products = await Product.find({categories:{$in:[qCategory]}}).sort({createdAt:-1}).limit()
            }
            else if (qNew){
                products = await Product.find().sort({createdAt:-1}).limit()
            }
            else if(qCategory){
                products = await Product.find({categories:{$in:[qCategory]}})
            }
            else {
                products = await Product.find()
            }
           
            res.status(200).json(products)

        } catch (error) {
            res.status(500).json(error.message)
        }   
    }
    GetAllProductByName =async(req,res)=>{

       

        try {
            const products = await Product.find()
           
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error.message)
        }

    }


}




module.exports = new ProductController;