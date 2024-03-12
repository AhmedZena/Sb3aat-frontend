import "./navbar";
import { Router, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { BellIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Navbar() {
  return (
    // <div>Navbar</div>
    <div className="bg-fourth ">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-3">
          <div className="flex items-center justify-evenly font-bold">
            <NavLink to="/" className="text-third text-2xl font-bold mr-5 ">
              <span className="text-first  text-3xl">S</span>b3at
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first "
                }`
              }
            >
              Categories
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first "
                }`
              }
            >
              service
            </NavLink>

            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first "
                }`
              }
            >
              Notifications
            </NavLink>
            <NavLink
              to="/message"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first "
                }`
              }
            >
              message
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first "
                }`
              }
            >
              Cart
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first "
                }`
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/createService"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first "
                }`
              }
            >
              Create Service
            </NavLink>
            <NavLink
              to="/CreateCourse"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first "
                }`
              }
            >
              CreateCourse{" "}
            </NavLink>
          </div>
          <div className="flex items-center">
            {/* <NavLink to="/profile" className="text-white mr-5">
              Profile
            </NavLink> */}

            <NavLink to="/login" className="text-white mr-5">
              login
            </NavLink>
            <NavLink to="/register" className="text-white mr-5">
              register
            </NavLink>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <FaSearch className=" text-gray-400 hover:text-white focus:outline-none mr-4" />
            <IoCartSharp className=" text-gray-400 hover:text-white focus:outline-none mr-4" />

            <LuMessagesSquare className=" text-gray-400 hover:text-white focus:outline-none mr-4" />

            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <NavLink to="/profile">
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </NavLink>
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
      </div>
    </div>
  );
}
