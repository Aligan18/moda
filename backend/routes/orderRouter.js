const router = require("express").Router();
const TestController= require('../controller/test')

router.get('/userget', TestController.testGet)
router.post('/userpost', TestController.testPost)


module.exports = router;