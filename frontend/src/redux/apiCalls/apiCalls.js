import {loginStart, loginSuccess, loginFailure, registrationEnd} from '../reducers/userReducer'
import {publicRequest, userCreateRequest} from '../../axios/requestMethods'
import { cartLogin } from '../reducers/cartReducer'
import FullValidator from '../../tools/register'

export const login = async(dispatch,login, password)=>{
    dispatch(loginStart())

    try {
        const res = await publicRequest.post('/api/login',{login , password})
        dispatch(loginSuccess(res.data))
        try {
            const Token =res.data.accessToken
            const id = res.data._id
            const userRequest =  userCreateRequest(Token)
            
            const cart = await userRequest.get(`/api/cart/find/${id}`)
            const products = cart.data.products
            dispatch(cartLogin({products}))
        } catch (error) {
            console.log(error.response.data)
        }
        
    } catch (error) {

        error.response? dispatch(loginFailure(error.response.data)): dispatch(loginFailure("Сервер временно не доступен"))

    }

}   

export const registration = async(dispatch,register,validation, setValidation,setError, history) => {
    dispatch(loginStart())

    console.log('register',register)
    setValidation( FullValidator.fullChecking(  register.password, 
                                                       register.email ,
                                                       register.dublication,
                                                       register.name, 
                                                       register.surname, 
                                                       register.login
                                                       )
    )

console.log(validation)
        
    if(!validation.isError){     
            try {
                const res = await publicRequest.post('/api/register',{...register})
                try {
                    const userId = res.data._id
                    await publicRequest.post('/api/cart',{userId ,  products:[]})
                    dispatch(registrationEnd())
                    setError('')
                    history.push('/login')

                } catch (error) {
                   
                    dispatch(registrationEnd())
                }

            } catch (error) {
                error.response? setError(error.response.data): setError("Сервер временно не доступен")
                dispatch(registrationEnd())
            }
    }
   
}