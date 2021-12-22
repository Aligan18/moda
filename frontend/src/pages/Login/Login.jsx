import React, {useState} from 'react'
import Form from '../../components/Form/Form'
import classes from './Login.module.css'
import {publicRequest} from "../../axios/requestMethods" 
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {login} from '../../redux/apiCalls/apiCalls'


const Login = () => {
    const history = useHistory()
    
    const [user, setUser]= useState({})
    const dispatch = useDispatch() 
    const loginStaff={
            placeholder: ['Login','Пароль'],
            value:['username', 'password'],
            title:'ВОЙТИ В АККАУНТ',
            button:'ВОЙТИ',
            linkTitle:'Создать аккаунт',
            route:'/register',
            background:'https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    

    const buttonClick=async(event)=>{
        event.preventDefault();
       
        login(dispatch, user.username , user.password )
        
    }


    return (
        <div style={{ background:`url(${loginStaff.background})`}}>
        <div className={classes.container}>
            <Form buttonClick={buttonClick}  method={user} setMethod={setUser} staff={loginStaff}/>
        </div>
        </div>
    )
}

export default Login
