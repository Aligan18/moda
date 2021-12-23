import React, {useState} from 'react'
import Form from '../../components/Form/Form'
import classes from './Register.module.css'
import {publicRequest} from "../../axios/requestMethods" 
import { useHistory } from 'react-router-dom'

const Register = () => {
    const [error, setError] = useState('')
    const [register, setRegister]= useState({})
    const history = useHistory()
    
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
   

    const buttonClick=async()=>{
        try {
            const res = await publicRequest.post('/api/register',register)
            console.log(res.data)
            try {
                const userId = res.data._id
                 await publicRequest.post('/api/cart',{userId ,  products:[]})

                 setError('')
                 history.push('/login')
            } catch (error) {
                console.log(error)
            }

        } catch (error) {
            setError(error.response.data)
        }
        
        
    }

    return (
        <div style={{ background:`url(${registerStaff.background})`}}>
            <div className={classes.container}>
                <Form method={register} setMethod={setRegister} buttonClick={buttonClick} error={error} staff={registerStaff}/>
            </div>
        </div>
    )
}

export default Register
