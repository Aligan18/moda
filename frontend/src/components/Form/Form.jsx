import React from 'react'
import classes from './Form.module.css'
import {Link} from 'react-router-dom'

const FormRegister = ({staff}) => {

    



    
    return (
       
        
            <div className={classes.wrapper}>

                <h1 className={classes.title}> {staff.title} </h1>

                <form className={classes.form}>
                    {staff.placeholder.map(holder=>(
                        <input key={holder.placeholder} className={classes.input} placeholder={holder}/>
                    ))}
                </form>
                <div className={classes.create_box} >      
                    <button className={classes.btn}>{staff.button}</button>

                     <Link className={classes.create_account} to={staff.route}>
                        {staff.linkTitle}
                    </Link>

                </div> 
            </div>
        
        
    )
}

export default FormRegister
