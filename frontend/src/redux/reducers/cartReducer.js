import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        total:0,
    },

    reducers:{
        addProduct : ( state , action  ) => {
            
            let newArray = null
            newArray= state.products.find((product) => {
                if(product._id === action.payload.id ){
                     product.quantity= action.payload.quantity
                     return product
                }
               
            })
            console.log(newArray)
            !newArray && state.products.push(action.payload)

            // total
            state.total=0
            state.products.map((product)=>{
                state.total+= product.quantity * product.price
            })
        },
        deleteProduct : (state , action) => {
            state.products.find((product, index)=>{
                if(product._id === action.payload.id){
                     let split =state.products.splice(index,1)
                     
                     return product
                }

            })
            state.total=0
            state.products.map((product)=>{
                state.total+= product.quantity * product.price
            })

        },

    }


})

export const {addProduct, deleteProduct} = cartSlice.actions
export default cartSlice.reducer