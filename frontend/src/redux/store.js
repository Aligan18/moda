import {configureStore , combineReducers} from '@reduxjs/toolkit'
import cartReducer from "./reducers/cartReducer"
import userReducer from "./reducers/userReducer"
import searchReducer from './reducers/searchReducer'

import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({ 
    cart:cartReducer,
    user:userReducer,
    search:searchReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer )

export const store =  configureStore ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})



 export  let persistor = persistStore(store)
