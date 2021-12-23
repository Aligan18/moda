import axios from 'axios';




const BASE_URL = process.env.REACT_APP_STATIC_LOC



export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userCreateRequest=(Token)=>{
    const  userRequest  = axios.create({
        baseURL: BASE_URL,
        headers: { token:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJmNzFmZTM5NTc5Y2FjNGNmMDllMCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDAxNzE1NjIsImV4cCI6MTY0MDQzMDc2Mn0.9jGaGvx-91fymvizsODCRWQrho8MsbHW7UQLR9Rw5_0`}
    })
    return userRequest
}