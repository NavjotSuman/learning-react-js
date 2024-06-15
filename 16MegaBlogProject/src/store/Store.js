import { configureStore } from '@reduxjs/toolkit'
import ReducerSlice from './authSlice'

const Store = configureStore({
    reducer: ReducerSlice,
})

export default Store;