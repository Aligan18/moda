import React from 'react'
import CartList from '../../components/CartList/CartList'
import OrderSheet from '../../components/OrderSheet/OrderSheet'
import Footer from '../../components/Footer/Footer'
import MyNavbar from '../../components/Navbar/MyNavbar'
import classes from './Cart.module.css'
import { useSelector  } from 'react-redux'

import { useHistory } from 'react-router-dom'

const Cart = () => {

    const history = useHistory()

    const cart = useSelector(state=>state.cart)
    const goBack=()=>{
        history.goBack()
    }

    return (
        <div className={classes.container}>
            <MyNavbar/>
                <div className={classes.wrapper}>
                    <h1 className={classes.title}>
                        Корзина покупок
                    </h1>
 
                    <div className={classes.top}>
                        <button onClick={goBack} className={classes.button}>Вернуться к товарам</button>
                        <div className={classes.top_textsBox}>

                            <div className={classes.textCenter}>
                                <span className={classes.top_text}>Список Корзины(2)</span>
                            </div>
                            <div className={classes.textCenter}>
                                <span className={classes.top_text}>Список желаний(3)</span>
                            </div>
                        </div>
                        <button  className={classes.button}>Сделать заказ</button>
                        
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.cartList}>
                            <CartList cart={cart.products} className={classes.bottom_cartList}/>
                        </div>
                        <div className={classes.orderBox}>
                            <div className={classes.orderSheet} >
                                <OrderSheet cart={cart}/>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Cart
