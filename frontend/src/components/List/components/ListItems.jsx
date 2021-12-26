import React from 'react'

import classes from './ListItems.module.css'


const ListItems = ({listItems , EditButton}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.checkbox}>
                <input type="checkbox"/>
            </div>

            <div className={classes.box}>
                <h6>{listItems.title}</h6>
            </div>
            <div className={classes.box}>
                <h6>{listItems.info} </h6>
            </div>
            <div className={classes.box}>
                <h6>{listItems.status} </h6>
            </div>
            <div className={classes.box}>
                <h6>{listItems.counter} </h6>
            </div>


            <div className={classes.box}>
                {listItems.action?
                    <h6>{listItems.action}</h6>
                    :
                    <>
                    <button onClick={()=>EditButton(listItems)} className={classes.btn}><i className="fas fa-edit"></i></button>
                    <button className={classes.btn}><i className="fas fa-trash"></i></button>
                    </>
                }
               
            </div>
        </div>
    )
}

export default ListItems
