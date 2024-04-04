import "./navbar";
import React, { useState } from "react";
import { Router, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { BellIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../axiousConfig/instance.js";
import { useDispatch } from "react-redux";
import { changeRole } from "../../Store/slices/role.js";
import { changeUser } from "../../Store/slices/user.js";

export default function Navbar() {
  const { unreadCount } = useSelector((state) => state.notifications);
  const [unReadNotifications, setUnReadNotifications] = useState([]);
  const navigate = useNavigate();
  const isUser = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  const { user } = useSelector((state) => state.user);
  console.log({ user });

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const fetchProfile = async () => {
    try {
      axiosInstance.defaults.headers.common["Authorization"] = `${token}`;
      // Second API Call: Fetch User Profile
      const profileResponse = await axiosInstance.get("/auth/profile");
      dispatch(changeRole(profileResponse.data.role));
      dispatch(changeUser(profileResponse.data));
      console.log(profileResponse.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  // fetch unread notifications
  const unReadNotificationsApi = async () => {
    try {
      const response = await axios.get(
        `${process.env.SOCKET_SERVER_URL}/api/notifications/unread`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setUnReadNotifications(response.data.notifications);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  useEffect(() => {
    fetchProfile();
    unReadNotificationsApi();
  }, [isUser, unreadCount]);

  // notification
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  return (
    <div className="bg-slate-800">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-3">
          <div className="flex items-center mr-32 font-bold justify-evenly">
            <NavLink to="/" className="mr-6 text-2xl font-bold text-third ">
              <span className="text-3xl text-first">S</span>ab3aat
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first text-lg "
                }`
              }
            >
              Categories
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first text-lg"
                }`
              }
            >
              About Us
            </NavLink>

            {user && user.role === "freelancer" && (
              <>
                <NavLink
                  to="/createService"
                  className={({ isActive }) =>
                    `mr-5 ${
                      isActive
                        ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                        : "text-first text-lg"
                    }`
                  }
                >
                  Create Service
                </NavLink>
                <NavLink
                  to="/CreateCourse"
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                        : "text-first text-lg "
                    }`
                  }
                >
                  Create Course{" "}
                </NavLink>
              </>
            )}
          </div>

          <div className="flex items-center ">
            {/* <NavLink to="/profile" className="mr-5 text-white">
              Profile
            </NavLink> */}

            {!user.role && (
              <>
                <NavLink
                  to="/login"
                  className="mr-5 text-lg font-bold text-white"
                >
                  login
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-lg font-bold text-white"
                >
                  register
                </NavLink>
              </>
            )}
          </div>
          {user.role && (
            <>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 m-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <NavLink to="/search">
                  <FaSearch className="mr-4 text-xl text-gray-200 hover:text-white focus:outline-none" />
                </NavLink>

                <NavLink to="/cart">
                  <IoCartSharp className="mr-4 text-xl text-gray-200 hover:text-white focus:outline-none" />
                </NavLink>
                <NavLink to={`/messages/${user._id}`}>
                  <LuMessagesSquare className="mr-4 text-xl text-gray-200 hover:text-white focus:outline-none" />
                </NavLink>

                {/* <NavLink to="/notifications">
                  <button
                    type="button"
                    className="relative p-1 text-gray-200 rounded-full hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="">
                      {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                          {unreadCount}
                        </span>
                      )}
                    </span>

                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </NavLink> */}

                <Menu as="div" className="relative ">
                  <div>
                    <Menu.Button className="relative p-1 text-gray-200 rounded-full hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      {/* <NavLink to="/profile"> */}
                      <span className="">
                        {unreadCount > 0 && (
                          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            {unreadCount}
                          </span>
                        )}
                      </span>

                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                      {/* </NavLink> */}
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 flex flex-col w-96 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {unReadNotifications.map((notification, i) => (
                        <div
                          key={i}
                          className="flex items-center w-full gap-2 px-4 py-2 text-xs text-gray-700 bg-gray-300"
                        >
                          <img
                            src={
                              notification.userImg ||
                              "https://avatars.hsoubcdn.com/477c1806403780d9be54db92ffcc9442?s=256"
                            }
                            alt="User Img"
                            className="w-8 h-8 rounded-full"
                          />
                          <h3 className="ml-5 text-xs font-semibold inline">
                            {notification.message}
                          </h3>
                          <h4 className="ml-5 text-xs text-gray-600 font-semibold inline-block">
                            {/* show time and date\ */}

                            {new Date(
                              notification.createdAt
                            ).toLocaleDateString()}
                          </h4>
                        </div>
                      ))}
                      {/* if no unread */}
                      {unReadNotifications.length === 0 && (
                        <div className="flex items-center w-full gap-2 px-4 py-2 text-sm text-gray-700">
                          <h3 className="ml-5 text-xs font-semibold inline">
                            No Unread Notifications
                          </h3>
                        </div>
                      )}

                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex items-center w-full gap-2 px-4 py-2 text-sm text-gray-700">
                            <button
                              onClick={() => navigate("/notifications")}
                              className="font-bold"
                            >
                              View All Notifications
                            </button>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      {/* <NavLink to="/profile"> */}
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full "
                        // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        src={user.profilePhoto.url}
                        alt=""
                      />
                      {/* </NavLink> */}
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 flex flex-col w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex items-center w-full gap-2 px-4 py-2 text-sm text-gray-700">
                            <CgProfile />
                            <button
                              className="font-bold"
                              onClick={() => navigate("/profile")}
                            >
                              Your Profile
                            </button>
                          </div>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex items-center w-full gap-2 px-4 py-2 text-sm text-gray-700">
                            <LogOut color="red" />
                            <button
                              onClick={handleLogout}
                              className="font-bold text-red-400"
                            >
                              Sign out
                            </button>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
