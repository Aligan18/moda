import React from 'react'




import CartItem from './components/CartItem'



const CartList = ({cart}) => {

    


    return (<div>
        {cart.map((product,index) =>
            <CartItem key={index} product={product}/>
        )}
    </div>
      
    )
}

export default CartList
