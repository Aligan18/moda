const router = require("express").Router();
const Controller= require('../controller/AuthController')

//REGISTER
router.post('/register',Controller.Registration )
router.post('/login',Controller.Login)


module.exports = router;