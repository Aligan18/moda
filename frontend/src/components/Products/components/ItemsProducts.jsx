import React from 'react'
import { Link } from 'react-router-dom'
import { router, routerPaths } from '../../../router/router'

const ItemsProducts = ({product}) => {
    return (
        <div className='product_container'>
            <div className='product_circle'/>
                {/* Image */}
                <img className='product_img' alt='' src={product.img}/>

                {/* Icons */}
                <div className='product_info'>
                    {/* Add to cart */}
                    <div className='product_icon_circle'>
                         <i className="fas fa-cart-plus product_icon"></i>
                    </div>

                    {/* Search */}
                    <Link className='produc_link' to={routerPaths.PRODUCT}>
                        <div className='product_icon_circle'>
                            <i className="fas fa-search product_icon"></i>
                        </div>
                    </Link>
                    {/* Add to Favorites */}
                    <div className='product_icon_circle'>
                        <i className="far fa-heart product_icon"></i>
                    </div>
                </div>
            
        </div>
    )
}

export default ItemsProducts
