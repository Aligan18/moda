const User = require("../models/User")
const CryptoJS = require("crypto-js")


class UserController{

    
   UpdateUser =async(req,res)=>{
        
        if(req.body.password){
        
            req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        }


        try {
            const updatedUser= await User.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },{new: true})

            res.status(200).json(updatedUser)

        } catch (error) {
            res.status(500).json(error)
        }
   }
   
   DeleteUser = async(req,res)=>{
        try {
             await User.findByIdAndDelete(req.params.id)

            res.status(200).json("User has been deleted")

        } catch (error) {
            res.status(500).json(error)
        }   
   }

   GetUser = async(req,res)=>{
        try {
            const user = await User.findById(req.params.id)

            const {password , ...others} = user._doc
            res.status(200).json(others)

            

        } catch (error) {
            res.status(500).json(error)
        }   
    }

    GetAllUsers = async(req,res)=>{
        
        try {
             const qwery = req.query.new   
             const users = qwery? await User.find().sort({_id:-1}).limit(5) : await User.find()
    
            res.status(200).json(users)
    
        } catch (error) {
            res.status(500).json(error.message)
        }   
    }

    GetUserStats = async(req,res)=>{
            const date = new Date()
            const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
        try {
             
            const data = await User.aggregate([
                {$match:{createdAt:{$gte : lastYear }}},

                {$project: { month: {$month:"$createdAt"}}},

                {$group:{
                    _id:"$month",
                    total:{$sum:1},
                },},
                
            ])
    
            res.status(200).json(data)
    
        } catch (error) {
            res.status(501).json(error.message)
        }   
    }
}


module.exports = new UserController;