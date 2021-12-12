import React from 'react'
import classes from './CartItem.module.css'
import Counter from '../../Counter/Counter'

const CartItem = ({product}) => {
    return (
        <div className={classes.wrapper}>
        <div className={classes.left}>
            <div className={classes.imgBox}>
                 <img className={classes.img} src={product.img}/>
            </div>
            <div className={classes.info}>
                <ul className={classes.ul}>
                    <li className={classes.li}><b>Товар: </b> {product.title}</li>
                    <li className={classes.li}><b>Цвет: </b> {product.color}</li>
                    <li className={classes.li}><b>id: </b>{product.id}</li>
                </ul>
            </div>
       </div>

        
       <div className={classes.right}>
            <div className={classes.right_items}>
                <Counter amount={product.amount}/>
                <h2 className={classes.price}>{product.price}</h2>
            </div>
       </div>
   </div>
    )
}

export default CartItem
