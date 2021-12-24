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

const rootPersistReducer = combineReducers({ 
    cart:cartReducer,
    user:userReducer,
})
const rootStoreReducer = combineReducers({
  cart:cartReducer,
  user:userReducer,
  search:searchReducer
})

const persistedReducer = persistReducer(persistConfig,rootPersistReducer )

const perStore =  configureStore ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const store =  configureStore ({
  reducer: rootStoreReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})


 export  let persistor = persistStore(perStore)
