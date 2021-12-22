import React, {useEffect,useState} from 'react'
import classes from './CartItem.module.css'
import Counter from '../../Counter/Counter'

import { useDispatch } from 'react-redux'
import CartTools from "../../../tools/cartTools"
import {deleteProduct} from '../../../redux/reducers/cartReducer'

const CartItem = ({product}) => {
    
    const id = product._id
    const[quantity,setQuantity] =useState(product.quantity)
    const dispatch = useDispatch()

    useEffect(() => {
        CartTools.addToCart({product, quantity, dispatch , id })
    },[quantity])

    const handleClick=()=>{
        dispatch(deleteProduct({id}))
    }

    return (
        <div className={classes.wrapper}>
        <div className={classes.left}>
            <div className={classes.imgBox}>
                 <img className={classes.img} alt='' src={process.env.REACT_APP_STATIC_LOC +product.img}/>
            </div>
            <div className={classes.info}>
                <ul className={classes.ul}>
                    <li className={classes.li}><b>Товар: </b> {product.title}</li>
                    <li className={classes.li}><b>Цена: </b> {product.price} тг</li>
                   
                </ul>
            </div>
       </div>

        
       <div className={classes.right}>
            <div className={classes.right_items}>
                <Counter amount={quantity} setAmount={setQuantity}/>
                <h2 className={classes.price}>{product.price * product.quantity} тг</h2> 
            </div>
            <button onClick={handleClick}> удалить </button>
       </div>
   </div>
    )
}

export default CartItem
