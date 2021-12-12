import React from 'react'
import Form from '../../components/Form/Form'
import classes from './Login.module.css'

const Login = () => {
    const loginStaff={
            placeholder: ['Login','Пароль'],
            title:'ВОЙТИ В АККАУНТ',
            button:'ВОЙТИ',
            linkTitle:'Создать аккаунт',
            route:'/register',
            background:'https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    


    return (
        <div style={{ background:`url(${loginStaff.background})`}}>
        <div className={classes.container}>
            <Form  staff={loginStaff}/>
        </div>
        </div>
    )
}

export default Login
