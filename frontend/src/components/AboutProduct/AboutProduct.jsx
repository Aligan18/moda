import React from 'react'
import Counter  from '../Counter/Counter'
import classes from './AboutProduct.module.css'

const AboutProduct = ({product}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.imageContainer}>
                <img className={classes.img} src={process.env.REACT_APP_STATIC_LOC + product.img} />
            </div>
            


            <div className={classes.infoContainer}>
                <h1 className={classes.title}>
                    {product.title}
                </h1>
                <h4 className={classes.desc}>
                   {product.desc}
                </h4>
                <h3 className={classes.price}> {product.price} тг </h3>      

                <div className={classes.addContainer}>
                    <Counter amount={1} />
                    <div className={classes.buttonBox}>
                        <button className={classes.cart}>Добавить в корзину</button>
                    </div>
                </div>

            </div>
           

        </div>
    )
}

export default AboutProduct
