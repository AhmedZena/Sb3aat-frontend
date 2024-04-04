import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    total: 0,
    readCount: 0,
    unreadCount: 0,
    notifications: [],
  },
  reducers: {
    setNotifications: (state, action) => {
      state.total = action.payload.total;
      state.readCount = action.payload.readCount;
      state.unreadCount = action.payload.unreadCount;
      state.notifications = action.payload.notifications;
    },
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
      state.total += 1;
      if (!action.payload.isRead) {
        state.unreadCount += 1;
      }
    },
    markNotificationAsRead: (state, action) => {
      const notification = state.notifications.find(
        (n) => n._id === action.payload
      );
      if (notification && !notification.isRead) {
        notification.isRead = true;
        state.readCount += 1;
        state.unreadCount -= 1;
      }
    },
  },
});

export const { setNotifications, addNotification, markNotificationAsRead } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
