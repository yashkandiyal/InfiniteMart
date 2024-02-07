import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './CartSlices'
export  const store=configureStore({
    reducer:{
        cart:CartReducer
    }
    
})