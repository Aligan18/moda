import React from 'react'

import { routerPaths } from '../../../router/router'
import {Link} from 'react-router-dom'
import classes from './ItemsCotegory.module.css'

const CotegoryItems = ({cotegory, total}) => {
    return (
        <div className={classes.col} >
            <div className={classes.cotegory}>
                {/* Image */}
                <img className={classes.img} alt=""  src={cotegory.img}/>
                <div className={classes.info}> 
                    {/* Title */}
                    <h1 className={classes.title}>{cotegory.title}</h1>
                    {/* Button */}
                    <Link to={routerPaths.PRODUCT_LIST}>
                        <button className={classes.btn} >ПОДРОБНЕЕ</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CotegoryItems
