import React from 'react'
import {popularProducts} from '../../data/data'
import ItemsProducts from './components/ItemsProducts'
import classes from './Products.module.css'




const Products = ({products}) => {
   

    return (
        <div className={classes.container}>
            {products.map(product =>(
                <ItemsProducts classes={classes} key={product._id} product={product} />
            ))
            }
        </div>
    )
}

export default Products
