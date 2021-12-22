import {loginStart, loginSuccess, loginFailure} from '../reducers/userReducer'
import {publicRequest} from '../../axios/requestMethods'

export const login = async(dispatch,username, password)=>{
    dispatch(loginStart())

    try {
        const res = await publicRequest.post('/api/login',{username , password})
        dispatch(loginSuccess(res.data))
    } catch (error) {

        dispatch(loginFailure(error.response.data))

    }

}   