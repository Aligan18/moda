import {addProduct} from '../redux/reducers/cartReducer'




class CartTools {

    addToCart=({product,quantity, dispatch,id})=>{
        dispatch( addProduct({...product, quantity, id}))  
  }




}

export default new CartTools()