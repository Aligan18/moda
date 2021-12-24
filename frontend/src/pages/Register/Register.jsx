import React, {useState} from 'react'
import Form from '../../components/Form/Form'
import GoBackButton from '../../components/goBack/GoBackButton'
import {useDispatch} from 'react-redux'

import {registration} from '../../redux/apiCalls/apiCalls'

import classes from './Register.module.css'
import { useHistory } from 'react-router-dom'



const Register = () => {
    const [error, setError] = useState('')
    const [validation, setValidation] = useState({})
    const [register, setRegister]= useState({})
    const history = useHistory()

    const dispatch = useDispatch()
    
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
                'login',
                'email',
                'password',
                'dublication'
        ],
        title:'СОЗДАТЬ АККАУНТ',
        button:'СОЗДАТЬ',
        linkTitle:'Уже есть аккаунт',
        route:'/login',
        background:'https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
   

    const buttonClick=async()=>{
        registration(dispatch,register,validation, setValidation,setError, history)
    }

   

    return (
        <div style={{ background:`url(${registerStaff.background})`}}>
        <GoBackButton history={history} classes={classes}/>
            <div className={classes.container}>
            
                <Form method={register} setMethod={setRegister} buttonClick={buttonClick} validation={validation} error={error} staff={registerStaff}/>
            </div>
        </div>
    )
}

export default Register
