import React from 'react'
import classes from './Counter.module.css'

const Counter = ({amount}) => {
    return (
        <div className={classes.container}>
            <button className={classes.add}><i className="fas fa-plus"></i></button>
            <span className={classes.amount}>{amount}</span>
            <button className={classes.add}><i className="fas fa-minus"></i></button>
        </div>
    )
}

export default Counter;