const router = require("express").Router();
const Controller= require('../controller/UserController')
const {verifyTokenAndAuthorization , verifyTokenAndAdmin} = require('../routes/verifyToken')


// update
router.put('/users/:id',verifyTokenAndAuthorization,  Controller.UpdateUser)
// delete
router.delete('/users/:id',verifyTokenAndAdmin, Controller.DeleteUser)
// get users info
router.get('/users/find/:id',verifyTokenAndAdmin, Controller.GetUser)
// get all users 
router.get('/users/find/',verifyTokenAndAdmin, Controller.GetAllUsers)
// get user stats
router.get('/users/stats',verifyTokenAndAdmin, Controller.GetUserStats)



module.exports = router;