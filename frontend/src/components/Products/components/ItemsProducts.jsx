import React from 'react'
import { Link } from 'react-router-dom'
import {  routerPaths } from '../../../router/router'
import { useDispatch } from 'react-redux'
import CartTools from "../../../tools/cartTools"

const ItemsProducts = ({product , classes}) => {
    const quantity =1 
    const id = product._id
    const dispatch = useDispatch()
    
    const addCart = () =>{
        CartTools.addToCart({product, quantity , dispatch, id })
    }

    return (
        <div className={classes.product_container}>
            
                {/* Image */}
                <div className={classes.preview}>
                    <div className={classes.img_box}>
                        <img className={classes.img} alt='' src={process.env.REACT_APP_STATIC_LOC+ product.img} />
                    </div>
                    <div className={classes.text_box}>
                         <h5> {product.title}</h5>
                    </div>
                    <div className={classes.price}>
                         <h2>{product.price} тг</h2>
                    </div>
                </div>
                {/* Icons */}
                <div className={classes.info}>
                    {/* Add to cart */}
                    <div onClick={addCart} className={classes.icon_circle}>
                         <i className={`fas fa-cart-plus ${classes.icon}`}></i>
                    </div>

                    {/* Search */}
                    <Link className={classes.link} to={routerPaths.PRODUCT + product._id}>
                        <div className={classes.icon_circle}>
                            <i className={`fas fa-search ${classes.icon}`}></i>
                        </div>
                    </Link>
                    {/* Add to Favorites */}
                    <div className={classes.icon_circle}>
                        <i className={`far fa-heart ${classes.icon}`}></i>
                    </div>
            </div>
            
        </div>
    )
}

export default ItemsProducts
