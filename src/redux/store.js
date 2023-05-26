
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlice';
import cartReducer from './slices/cartSlice';


const rootReducer = combineReducers({
    login: loginReducer,
    cart: cartReducer
});


const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export default store