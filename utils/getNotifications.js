import axios from "axios";
import { setNotifications } from "../src/Store/slices/notifications";
import { useDispatch } from "react-redux";
// This function should be called inside a React component or custom hook
export const useFetchNotifications = () => {
  const dispatch = useDispatch();

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/notifications/user",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      dispatch(setNotifications(response.data));
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return fetchNotifications;
};

// get unread notifications
export const useFetchUnreadNotifications = () => {
  const dispatch = useDispatch();

  const fetchUnreadNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/notifications/unread",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      dispatch(setNotifications(response.data));
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return fetchUnreadNotifications;
};
