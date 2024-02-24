import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const appStore = configureStore({
//     adding slices here
reducer:{
    cart: cartReducer,
}
})

export default appStore;