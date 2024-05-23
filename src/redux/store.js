import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { showHideCart, addToCart}  from './reducers.js'

const reducer = combineReducers({
        showHideCart,
        addToCart
})

const store = configureStore({reducer});

export default store;