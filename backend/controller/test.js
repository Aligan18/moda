


class TestController{

     testGet =async(req,res)=>{

        res.send('user test is successfull ')
    }
    testPost =(req,res)=>{
            try {
                const username = req.body.username
                res.send('your user name is '+ username)
            } catch (error) {
                res.send(error.message)
            }
           
      
    }
    testDelete =async(req,res)=>{

        res.send('user test is successfull ')
    }
    testPull =async(req,res)=>{

        res.send('user test is successfull ')
    }
}


module.exports = new TestController;