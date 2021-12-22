import {addProduct} from '../redux/reducers/cartReducer'
import { useDispatch } from 'react-redux'



class CartTools {

    addToCart=({product,quantity, dispatch,id})=>{
        dispatch( addProduct({...product, quantity, id}))  
  }




}

export default new CartTools()