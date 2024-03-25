import "./navbar";
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

export default function Navbar() {
  const navigate = useNavigate();
  const isUser = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  const { user } = useSelector((state) => state.user);
  console.log({ user });

  return (
    <div className="bg-slate-800">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-3">
          <div className="flex items-center justify-evenly font-bold mr-32">
            <NavLink to="/" className="text-third text-2xl font-bold mr-6 ">
              <span className="text-first  text-3xl">S</span>ab3aat
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

            {/* <NavLink
              to="/service"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-second font-extrabold text-lg border-b-orange-300 border-b-2"
                    : "text-first text-lg"
                }`
              }
            >
              Service
            </NavLink> */}

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
            {/* <NavLink to="/profile" className="text-white mr-5">
              Profile
            </NavLink> */}

            <NavLink to="/login" className="text-white mr-5 text-lg font-bold">
              login
            </NavLink>
            <NavLink to="/register" className="text-white text-lg font-bold">
              register
            </NavLink>
          </div>
          {user.role && (
            <>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 m-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <FaSearch className=" text-gray-200 hover:text-white focus:outline-none mr-4 text-xl" />

                <NavLink to="/cart">
                  <IoCartSharp className=" text-gray-200 hover:text-white focus:outline-none mr-4 text-xl" />
                </NavLink>
                <NavLink to="/message">
                  <LuMessagesSquare className=" text-gray-200 hover:text-white  focus:outline-none mr-4 text-xl " />
                </NavLink>

                <NavLink to="/notifications">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-gray-200 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </NavLink>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      {/* <NavLink to="/profile"> */}
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full "
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
                    <Menu.Items className="flex flex-col absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700">
                            <CgProfile />
                            <button className="font-bold">Your Profile</button>
                          </div>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700">
                            <LogOut color="red" />
                            <button
                              onClick={handleLogout}
                              className="text-red-400 font-bold"
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
