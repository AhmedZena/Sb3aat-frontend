import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
// local host 8800
const SOCKET_SERVER_URL = "http://localhost:8800";

// use selector
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useFetchNotifications } from "../../../utils/getNotifications";
// import action
import { addNotification } from "../../Store/slices/notifications";
export default function Notifications() {
  const fetchNotifications = useFetchNotifications();
  //   const [notifications, setNotifications] = useState([]);
  const { notifications, total, readCount, unreadCount } = useSelector(
    (state) => state.notifications
  );

  // mark as read function to mark the notification as read
  const markAsRead = async (id) => {
    try {
      await axios.patch(
        `${process.env.SOCKET_SERVER_URL}/api/notifications/${id}`,
        {
          isRead: true,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      fetchNotifications();
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="container bg-white p-2 mb-5">
      <h1 className="text-3xl font-bold mt-5">Notifications</h1>
      {notifications.map((notification, i) => (
        <div
          key={i}
          className={`  py-5 text-center items-center flex  justify-evenly border-bottom border-black "
        ${notification.isRead ? "bg-white" : "bg-gray-200"}`}
        >
          <img
            src={
              notification.userImg ||
              "https://avatars.hsoubcdn.com/477c1806403780d9be54db92ffcc9442?s=256"
            }
            alt="User Img"
            className="w-12 h-12 rounded-full"
          />
          <h3 className="ml-5 text-2xl font-semibold inline">
            {notification.message}
          </h3>
          <h4 className="ml-5 text-sm text-gray-600 font-semibold inline-block">
            Posted on {new Date(notification.createdAt).toLocaleDateString()}
          </h4>

          <button
            className="bg-green-500 text-white p-2 rounded-lg ml-5"
            onClick={() => markAsRead(notification._id)}
          >
            Mark as Read
          </button>
        </div>
      ))}
    </div>
  );
}
