import React from 'react'
import classes from './Counter.module.css'



const Counter = ({amount, setAmount}) => {

    const handleQuantity =(type)=>{
       

        if (type ==='plus'){
           
            setAmount(amount+1)
        }
        else{

            amount>1 && setAmount(amount-1)
          
        }

    }




    return (
        <div className={classes.container}>
            <button onClick={()=>handleQuantity('plus')} className={classes.add}><i className="fas fa-plus"></i></button>
            <span className={classes.amount}>{amount}</span>
            <button onClick={()=>handleQuantity('minus')} className={classes.add}><i className="fas fa-minus"></i></button>
        </div>
    )
}

export default Counter;