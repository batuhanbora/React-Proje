import { configureStore } from "@reduxjs/toolkit";
import { cart}  from './reducers.js'

const defaultState = {
    cart: false
}

export const store = configureStore({
    reducer: cart,
    preloadedState: defaultState
})