const router = require("express").Router();
const Controller= require('../controller/UserController')
const {verifyTokenAndAuthorization , verifyTokenAndAdmin} = require('../routes/verifyToken')


// update
router.put('/:id',verifyTokenAndAuthorization,  Controller.UpdateUser)
// delete
router.delete('/:id',verifyTokenAndAdmin, Controller.DeleteUser)
// get users info
router.get('/find/:id',verifyTokenAndAdmin, Controller.GetUser)
// get all users 
router.get('/find/',verifyTokenAndAdmin, Controller.GetAllUsers)
// get user stats
router.get('/stats',verifyTokenAndAdmin, Controller.GetUserStats)



module.exports = router;