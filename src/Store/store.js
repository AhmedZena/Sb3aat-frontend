import { configureStore } from "@reduxjs/toolkit";
import RoleReducer from "./slices/role";
import UserReducer from "./slices/user";

const store = configureStore({
  reducer: {
    role: RoleReducer,
    user: UserReducer,
  },
});
export default store;
