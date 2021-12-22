import axios from 'axios';

const BASE_URL = process.env.REACT_APP_STATIC_LOC
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjhjMmM5MjUwNmE5NjU2OTcyOWJlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTkwOTYzNiwiZXhwIjoxNjQwMTY4ODM2fQ.y2NzUL_sOPj_UvYVvtjusCssleKuQsHwX6vUWjLufe0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${Token}`}
})