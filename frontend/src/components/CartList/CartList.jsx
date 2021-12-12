import React from 'react'
import classes from './CartList.module.css'


import {cartProduct} from '../../data/data' 
import CartItem from './components/CartItem'



const CartList = () => {

    


    return (<div>
        {cartProduct.map((product,index) =>
            <CartItem key={index} product={product}/>
        )}
    </div>
      
    )
}

export default CartList
