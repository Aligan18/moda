const User = require('../models/User')
const CryptoJS =require('crypto-js')
const jwt = require("jsonwebtoken")

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
            res.status(500).send("Пользователь уже существует, используйте другой логин или email")
        }
   };

   Login = async(req,res)=>{
        try {
            const user = await User.findOne({username : req.body.username})
                if(!user){
                   
                    return res.status(401).send("Неверный логин или пароль")
                }
            
            const hashedPassword=  CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
            const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

           if( OriginalPassword !== req.body.password ){ 
               
                return res.status(401).send('Неверный логин или пароль')
            }
            // create jwt token
            const accessToken =jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin,
            },
                process.env.JWT_SEC,
                {expiresIn:"3d"}
            
            )

            const {password , ...others} = user._doc
            res.status(200).json({accessToken,...others})
            

        } catch (error) {
            res.status(402).json(error)
        }       
   }
  
}


module.exports = new TestController;