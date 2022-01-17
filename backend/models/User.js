const mongoose = require('mongoose');
const Schema = new mongoose.Schema( {

        name:{type: String , required: true,},
        surname:{type: String , required: true, },
        login:{type: String , required: true, unique: true},
        total:{type: Number, default:0},
        status:{type: String , default:"Inactive"},
        email:{type: String , required: true, unique: true},
        password:{type: String , required: true, },
        isAdmin:{type: Boolean , default: false},
        
    },{timestamps:true}
    
);

module.exports = mongoose.model('User',Schema)

