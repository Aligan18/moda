import React from 'react'
import classes from './OrderSheet.module.css'

const OrderSheet = ({cart,  setModalShow ,delivery ,sale,}) => {

    
    

    return (
        <div className={classes.wrapper}>
            <div className={classes.top}>
                <h1 className={classes.title}> ЛИСТ ЗАКАЗА</h1>
            </div>
            <div className={classes.center}>
                <h4 className={classes.info}>Сумма товаров</h4>
                <h4 className={classes.info}>{cart.total} тг</h4>
            </div>
            <div className={classes.center}>
                <h4 className={classes.info}>Стоймость доставки</h4>
                <h4 className={classes.info}> {delivery} тг</h4>
            </div>
            <div className={classes.center}>
                <h4 className={classes.info}>Скидка</h4>
                <h4 className={classes.info}> {sale}</h4>
            </div>
            <hr/>
            <div className={classes.center}>
                <h3 className={classes.price}>Общая цена </h3>
                <h4 className={classes.price}>{cart.total + delivery - sale}</h4>
            </div>
            <div className={classes.bottom}>
                <button onClick={()=>setModalShow(true)} className={classes.btn}>Сделать заказ</button>
            </div>
        </div>
    )
}

export default OrderSheet
