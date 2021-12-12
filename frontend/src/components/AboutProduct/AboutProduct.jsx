import React from 'react'
import Counter  from '../Counter/Counter'
import classes from './AboutProduct.module.css'

const AboutProduct = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.imageContainer}>
                <img className={classes.img} src='https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388' />
            </div>
            


            <div className={classes.infoContainer}>
                <h1 className={classes.title}>
                    Product
                </h1>
                <h4 className={classes.desc}>
                    Cupidatat velit cupidatat commodo dolor elit irure laboris aliquip pariatur dolore. Magna ut consectetur eu elit qui dolore dolore eiusmod consectetur cupidatat. Deserunt sint magna commodo quis.
                </h4>
                <h3 className={classes.price}> 2000 тг </h3>      

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
