const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require('./routes/user')

dotenv.config()
const app = express();
app.use(express.json())
// Route
app.use('/api',userRoute)



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

