const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require("dotenv");

const userRoute = require('./routes/userRouter')
const authRoute = require('./routes/authRouter')
const productRoute = require('./routes/productRouter')
const cartRoute = require('./routes/cartRouter')
const orderRoute = require('./routes/orderRouter')

const fileupload = require("express-fileupload")

const path = require("path")
const dirname = path.resolve();




dotenv.config()

const app = express();


app.use(express.json())
app.use(cors())
app.use('/', express.static(dirname + '/static'));
app.use(fileupload({}))
// Route
app.use('/api',userRoute)
app.use('/api',authRoute)
app.use('/api',productRoute)
app.use('/api',cartRoute)
app.use('/api',orderRoute)




const serverRun =async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mobgodb running')
        app.listen(process.env.PORT || 5000, ()=>{
            console.log('SERVER RUNNING IN 5000 PORT')
        })
    } catch (error) {
        console.error(error)
    }

}


serverRun();

