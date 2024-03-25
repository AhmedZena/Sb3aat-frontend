
import { configureStore } from "@reduxjs/toolkit";
import RoleReducer from './slices/role'




const store=configureStore({
    reducer:{
       role:RoleReducer,
    }
})
export default store