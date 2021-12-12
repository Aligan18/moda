import React from 'react'
import Form from '../../components/Form/Form'
import classes from './Register.module.css'

const Register = () => {
    const registerStaff={
        placeholder: [
            'Фамилия',
            'Имя',
            'Login',
            'email', 
            'Пароль',
            'Повторите пароль',
        ],
        title:'СОЗДАТЬ АККАУНТ',
        button:'СОЗДАТЬ',
        linkTitle:'Уже есть аккаунт',
        route:'/login',
        background:'https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }


    return (
        <div style={{ background:`url(${registerStaff.background})`}}>
            <div className={classes.container}>
                <Form staff={registerStaff}/>
            </div>
        </div>
    )
}

export default Register
