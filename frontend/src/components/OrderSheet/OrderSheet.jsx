import React from 'react'
import classes from './OrderSheet.module.css'

const OrderSheet = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.top}>
                <h1 className={classes.title}> ЛИСТ ЗАКАЗА</h1>
            </div>
            <div className={classes.center}>
                <h4 className={classes.info}>Сумма товаров</h4>
                <h4 className={classes.info}>80000 тг</h4>
            </div>
            <div className={classes.center}>
                <h4 className={classes.info}>Стоймость доставки</h4>
                <h4 className={classes.info}>2000 тг</h4>
            </div>
            <div className={classes.center}>
                <h4 className={classes.info}>Скидка</h4>
                <h4 className={classes.info}>- 5000 тг</h4>
            </div>
            <hr/>
            <div className={classes.center}>
                <h3 className={classes.price}>Общая цена </h3>
                <h4 className={classes.price}>70000 тг</h4>
            </div>
            <div className={classes.bottom}>
                <button className={classes.btn}>Сделать заказ</button>
            </div>
        </div>
    )
}

export default OrderSheet
