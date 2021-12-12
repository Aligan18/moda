const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT= 5000
const MONGO_URL='mongodb://Aligan18:Aligan18@moda-store-shard-00-00.6zpix.mongodb.net:27017,moda-store-shard-00-01.6zpix.mongodb.net:27017,moda-store-shard-00-02.6zpix.mongodb.net:27017/moda-store?ssl=true&replicaSet=atlas-4rv5w7-shard-0&authSource=admin&retryWrites=true&w=majority'

const serverRun =async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log('Mobgodb running')
    } catch (error) {
        console.error(error)
    }
}
serverRun()

app.listen(5000, ()=>{
    console.log('SERVER RUNNING IN 5000 PORT')
})
