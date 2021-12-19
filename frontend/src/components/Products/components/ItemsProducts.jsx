import React from 'react'
import { Link } from 'react-router-dom'
import {  routerPaths } from '../../../router/router'


const ItemsProducts = ({product , classes}) => {
    return (
        <div className={classes.product_container}>
            <div className={classes.circle}/>
                {/* Image */}
                <img className={classes.img} alt='' src={process.env.REACT_APP_STATIC_LOC+ product.img} />

                {/* Icons */}
                <div className={classes.info}>
                    {/* Add to cart */}
                    <div className={classes.icon_circle}>
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
