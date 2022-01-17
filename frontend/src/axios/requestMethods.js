import axios from 'axios';




const BASE_URL = process.env.REACT_APP_STATIC_LOC



export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userCreateRequest=(Token)=>{
    const  userRequest  = axios.create({
        baseURL: BASE_URL,
        headers: { token:`Bearer ${Token}`}
    })
    return userRequest
}