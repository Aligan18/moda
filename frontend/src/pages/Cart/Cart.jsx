import React,{useState} from 'react'
import CartList from '../../components/CartList/CartList'
import OrderSheet from '../../components/OrderSheet/OrderSheet'
import Footer from '../../components/Footer/Footer'
import MyNavbar from '../../components/Navbar/MyNavbar'
import classes from './Cart.module.css'
import { useSelector  } from 'react-redux'

import {userCreateRequest} from '../../axios/requestMethods'

import { useHistory } from 'react-router-dom'
import CenteredModal from '../../components/CenteredModal/CenteredModal'

import {Validator} from '../../tools/register'

const Cart = () => {
    const delivery = 2000
    const sale = 1000
    const history = useHistory()
    const user = useSelector(state => state.user.currentUser)
    const cart = useSelector(state=>state.cart)
   
    const [modalShow, setModalShow] = useState(false);
    const [deliveryInfo, setDeliveryInfo] = useState({});
    const [error, setError] = useState({});

    const goBack=()=>{
        history.goBack()
    }

    const requestOrder =async(order)=>{
        const privateRequest = userCreateRequest(user.accessToken)
        try {
            const res = await privateRequest.post(`/api/order/create/${user._id}`,order)
            console.log(res.data)
        } catch (error) {
            error.response &&console.log(error.response.data)
        }
         
    }

    const CreateOrder=()=>{
       const validPhone = Validator.checkPhone(deliveryInfo.phone)
        if (!validPhone){
            setError({
                ...error,
                phone:validPhone
            })
            const order ={
                name:user.surname +" "+ user.name,
                userId: user._id,
                products:cart.products,
                phone: deliveryInfo.phone,
                total: cart.total - sale + delivery,
                adress: deliveryInfo.adress,
                
            }
            requestOrder(order)
            console.log(order)
             
        }
        else {
            setError({
                ...error,
                phone:validPhone

            })
        }

    }

    

    return (
        <div className={classes.container}>
            <CenteredModal show={modalShow} 
                            setModalShow={()=>setModalShow(false)} 
                            CreateOrder={CreateOrder} 
                            deliveryInfo={deliveryInfo}
                            setDeliveryInfo={setDeliveryInfo}
                            error={error} 
                            />
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
                                <OrderSheet setModalShow={setModalShow}
                                            cart={cart}
                                            delivery={delivery}
                                            sale={sale} 
                                           
                                            />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Cart
