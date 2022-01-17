const jwt= require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        
        jwt.verify(token, process.env.JWT_SEC,(err,user)=>{
            if(err) {return res.status(406).send("Token is not valid")}
            
            req.user = user
            console.log(token)
            next();
            
        })
        
    } else {    
        return res.status(401).send("You are not authenticated")
    }
}

const verifyTokenAndAuthorization = (req, res, next )=>{

    verifyToken(req, res, ()=>{
        if (req.user.id===req.params.id || req.user.isAdmin) {
            next()
        } else {
            
            res.status(408).send("У Вас нет доступа")
        }
    })
}
const verifyTokenAndAdmin = (req, res, next )=>{
        verifyToken(req, res, ()=>{
            if (req.user.isAdmin) {
                next()
            } else {
                res.status(405).send("У Вас нет доступа")
            }
        })
}

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}