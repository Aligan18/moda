import React from 'react'
import { useHistory } from 'react-router-dom'
import Counter  from '../Counter/Counter'
import GoBackButton from '../goBack/GoBackButton'
import classes from './AboutProduct.module.css'
import { useSelector } from 'react-redux'

const AboutProduct = ({product, amount, setAmount, handleClick}) => {
    const history = useHistory()
    const auth = useSelector(state => state.user.currentUser)
    const isAdmin = auth? auth.isAdmin : false
  
    console.log(isAdmin)
    return (<div>
        <GoBackButton history={history} classes={classes}/>
        <div className={classes.wrapper}>
            
            <div className={classes.imageContainer}>
                <img alt={''} className={classes.img} src={process.env.REACT_APP_STATIC_LOC + product.img} />
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
                {!isAdmin && 
                    <Counter amount={amount} setAmount={setAmount} />
                }
                <div className={classes.buttonBox}>
                        <button onClick={handleClick} className={classes.cart}>Добавить в корзину</button>
                </div>
                </div>
               
            </div>
        </div>
        </div>
    )
}

export default AboutProduct
