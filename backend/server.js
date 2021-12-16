const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require('./routes/userRouter')
const authRoute = require('./routes/authRouter')
const productRoute = require('./routes/productRouter')
const cartRoute = require('./routes/cartRouter')
const orderRoute = require('./routes/orderRouter')



dotenv.config()
const app = express();
app.use(express.json())
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

