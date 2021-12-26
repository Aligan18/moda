import React, {useState} from 'react'
import Form from '../../components/Form/Form'
import GoBackButton from '../../components/goBack/GoBackButton'
import classes from './Login.module.css'

import { useHistory } from 'react-router-dom';

import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

import {login} from '../../redux/apiCalls/apiCalls'




const Login = () => {
    const {isFetching, errorMessage} = useSelector(state=>state.user)
    console.log(isFetching)
    const history = useHistory()
    const validation={isError:false}
    const [user, setUser]= useState({})
    const dispatch = useDispatch() 
    const loginStaff={
            placeholder: ['Login','Пароль'],
            value:['login', 'password'],
            title:'ВОЙТИ В АККАУНТ',
            button:'ВОЙТИ',
            linkTitle:'Создать аккаунт',
            route:'/register',
            background:'https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    

    const buttonClick=async(event)=>{
        event.preventDefault();
       
        login(dispatch, user.login , user.password )
        
    }

    
    return (
        <div style={{ background:`url(${loginStaff.background})`}}>
        <GoBackButton history={history} classes={classes}/>
        <div className={classes.container}>
            
            <Form   buttonClick={buttonClick}  
                    method={user} 
                    setMethod={setUser} 
                    staff={loginStaff}
                    error={errorMessage}
                    isFetching={isFetching}
                    validation={validation}
                    />
        </div>
        </div>
    )
}

export default Login
