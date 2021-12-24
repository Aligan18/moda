import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFetching: false,
        error:false,
        errorMessage: ""

    },

    reducers:{
        loginStart : ( state)=>{
            state.isFetching=true;

        },
        loginSuccess : (state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
            state.errorMessage =""
        },
        loginFailure : (state, action )=>{
            state.isFetching = false;
            state.error = true
            state.errorMessage = action.payload
        },
        logout :(state)=>{
            state.currentUser= null;

        },
        registrationEnd:(state)=>{
            state.isFetching=false
        }
    }


})

export const {loginStart, loginSuccess, loginFailure, logout, registrationEnd} = userSlice.actions
export default userSlice.reducer