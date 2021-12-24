import {createSlice} from '@reduxjs/toolkit'


const searchSlice = createSlice({
    name: 'search',
    initialState:{
        searchValue: ''
    },
    
    reducers:{

        changeSearchItems: ( state, action)=>{

            state.searchValue = action.payload.value;
        }

    }

})

export const {changeSearchItems} = searchSlice.actions
export default searchSlice.reducer