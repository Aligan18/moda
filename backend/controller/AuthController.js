const User = require('../models/User')
const CryptoJS =require('crypto-js')

class TestController{

   Registration =async(req,res)=>{

        const newUser= new User({

            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),

        })
        
        try {
            const saveUser = await newUser.save()    
            res.status(200).json(saveUser)    

        } catch (error) {
            res.status(500).json(error)
        }
   };

   Login = async(req,res)=>{
        try {
            const user = await User.findOne({username : req.body.username})

            !user && res.status(401).json('Неверный логин или пароль')

            const hashedPassword=  CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
            const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

            OriginalPassword !== req.body.password && res.status(401).json('Неверный логин или пароль')

            const {password , ...others} = user._doc
            res.status(200).json(others)

        } catch (error) {
            
        }       
   }
  
}


module.exports = new TestController;