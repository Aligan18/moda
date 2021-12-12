import React from 'react'
import {popularProducts} from '../../data/data'
import ItemsProducts from './components/ItemsProducts'
import './Products.css'
const Products = () => {
    return (
        <div className="products_container">
            {popularProducts.map(product =>(
                <ItemsProducts key={product.id} product={product} />
            ))
            }
        </div>
    )
}

export default Products
