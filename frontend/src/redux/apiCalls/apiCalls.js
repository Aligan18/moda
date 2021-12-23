import {loginStart, loginSuccess, loginFailure} from '../reducers/userReducer'
import {publicRequest, userCreateRequest} from '../../axios/requestMethods'
import { cartLogin } from '../reducers/cartReducer'

export const login = async(dispatch,username, password)=>{
    dispatch(loginStart())

    try {
        const res = await publicRequest.post('/api/login',{username , password})
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

        dispatch(loginFailure(error.response.data))

    }

}   