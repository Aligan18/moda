import React, {useState} from 'react'
import Form from '../../components/Form/Form'
import classes from './Register.module.css'
import {publicRequest} from "../../axios/requestMethods" 

const Register = () => {
    const [register, setRegister]= useState({})

    const registerStaff={
        placeholder: [
            'Фамилия',
            'Имя',
            'Login',
            'email', 
            'Пароль',
            'Повторите пароль',
        ],
        value:[
                "surname",
                'name',
                'username',
                'email',
                'password',
                'repeatPass'
        ],
        title:'СОЗДАТЬ АККАУНТ',
        button:'СОЗДАТЬ',
        linkTitle:'Уже есть аккаунт',
        route:'/login',
        background:'https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    console.log(register)

    const buttonClick=async()=>{
        try {
            const res = await publicRequest.post('/api/register',register)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div style={{ background:`url(${registerStaff.background})`}}>
            <div className={classes.container}>
                <Form method={register} setMethod={setRegister} buttonClick={buttonClick}  staff={registerStaff}/>
            </div>
        </div>
    )
}

export default Register
