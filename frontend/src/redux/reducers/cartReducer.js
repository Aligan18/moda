import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        amountProducts :0,
        total:0,
    },

    reducers:{

        cartLogin:( state, action)=> {

            state.products = action.payload.products
            state.amountProducts = state.products.length

            // total
            state.total=0
            state.products.map((product)=>
                state.total+= product.quantity * product.price
            )
        },

        addProduct : ( state , action  ) => {
            
            
            // add product to products
            let newArray = null
            newArray= state.products.find((product) => {
                if(product._id === action.payload.id ){
                     product.quantity= action.payload.quantity
                     return product
                }
               
            })
            
            // new product
            if(!newArray){  
                state.products.push(action.payload) 
                state.amountProducts +=1
            }

            // total
            state.total=0
            state.products.map((product)=>
                state.total+= product.quantity * product.price
            )
        },
        deleteProduct : (state , action) => {
            state.products.find((product, index)=>{
                if(product._id === action.payload.id){
                     state.products.splice(index,1)
                     state.amountProducts -=1
                     return product
                }

            })
            state.total=0
            state.products.map((product)=>{
                state.total+= product.quantity * product.price
            })

        },

        cartLogout : ( state ) => {
            state.products=[]
            state.total=0
            state.amountProducts =0

        }

    }


})

export const {addProduct, deleteProduct, cartLogout, cartLogin} = cartSlice.actions
export default cartSlice.reducer