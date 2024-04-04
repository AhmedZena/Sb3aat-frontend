import { configureStore } from "@reduxjs/toolkit";
import RoleReducer from "./slices/role";
import UserReducer from "./slices/user";
import notificationsReducer from "./slices/notifications";

const store = configureStore({
  reducer: {
    role: RoleReducer,
    user: UserReducer,
    notifications: notificationsReducer,
  },
});
export default store;
