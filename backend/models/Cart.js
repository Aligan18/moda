const mongoose = require('mongoose');
const Schema = new mongoose.Schema( {

        userId:{type: String , required: true,},
        products:[{
                
              
               quantity: {type: Number, default:1},
               categories: [{type: String}],
                desc: {type: String  },
                id: {type: String  },
                img: {type: String  },
                inStock: {type: Boolean, default:true  },
                price: {type: Number },
                title: {type: String  },
                
                
        }],
       
    },{timestamps:true}
    
);

module.exports = mongoose.model('Cart',Schema)

