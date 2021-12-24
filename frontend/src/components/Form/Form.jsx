import React,{ useState, useEffect} from 'react'
import classes from './Form.module.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Form = ({staff, method, setMethod, buttonClick , error,isFetching , validation}) => {
    
    let timer

    const inputChange =(event)=>{
        clearTimeout(timer)
       timer= setTimeout(()=>{
            setMethod({
                ...method,
                [event.target.name] : event.target.value
            })
          
        },600)
    }

    
    return (
       
        
            <div className={classes.wrapper}>
                {isFetching&& <div className={classes.isFetching}></div>}
                <h1 className={classes.title}> {staff.title} </h1>

                <form  className={classes.form}>
                    {staff.placeholder.map((holder,index)=>(
                      <div className={classes.inputContainer}> <input   
                                 onChange={(event)=>inputChange(event)} 
                                 name={staff.value[index]} 
                                 key={holder} 
                                 className={classes.input} 
                                 placeholder={holder}
                                 type={holder==="Пароль"? "password": null}
                                 autoComplete="new-password"
                                 />
                       {validation.isError && <h7 className={classes.error}>{validation.error[staff.value[index]]}</h7>} 
                    </div> 
                    ))}
                </form>

                {error && <h5 className={classes.error}>{error}</h5>}

                <div className={classes.create_box} >      
                    <button onClick={buttonClick} className={classes.btn}>{staff.button}</button>

                     <Link className={classes.create_account} to={staff.route}>
                        {staff.linkTitle}
                    </Link>

                </div> 
            </div>
        
        
    )
}

export default Form
