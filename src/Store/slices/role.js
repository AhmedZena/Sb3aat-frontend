
import { createSlice } from "@reduxjs/toolkit";



const roleSlice=createSlice({

        name:"role",
        initialState:{role:"user"},

        reducers:{
            changeRole:(state,action)=>{
                state.role=action.payload
            }
        }
      })

      export const {changeRole} =roleSlice.actions
      export default roleSlice.reducer