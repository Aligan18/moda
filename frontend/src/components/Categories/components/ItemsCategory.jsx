import React from 'react'

import { routerPaths } from '../../../router/router'
import {Link} from 'react-router-dom'
import classes from './ItemsCategory.module.css'

const CategoryItems = ({category, total}) => {
    return (
        <div className={classes.col} >
            <div className={classes.category}>
                {/* Image */}
                <img className={classes.img} alt=""  src={category.img}/>
                <div className={classes.info}> 
                    {/* Title */}
                    <h1 className={classes.title}>{category.title}</h1>
                    {/* Button */}
                    <Link to={routerPaths.PRODUCT_LIST + category.category}>
                        <button className={classes.btn} >ПОДРОБНЕЕ</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryItems
