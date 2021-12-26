const mongoose = require('mongoose');
const Schema = new mongoose.Schema( {

        title:{type: String , required: true, unique: true},
        desc:{type: String , required: true, },
        img:{type: String , required: true,},
        categories:{type: Array },
        price:{type: Number , required: true,},
        inStock:{type:Boolean , default: true},
        purchase: {type: Number , default: 0}
        
    },{timestamps:true}
    
);

module.exports = mongoose.model('Product',Schema)

