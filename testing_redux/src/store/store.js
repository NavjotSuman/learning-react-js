import {configureStore} from "@reduxjs/toolkit"
import todoSlice from "../components/todo/TodoSlice"

const store = configureStore({
    // reducer: {
    //     // This is where we would add reducers
    // }
    reducer: {todo:todoSlice}
})
export default store
