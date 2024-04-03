import Button from "react-bootstrap/Button";

import "./profile.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "../../axiousConfig/instance";
import { useDispatch } from "react-redux";
import { changeRole } from "../../Store/slices/role";
import { changeUser } from "../../Store/slices/user";
export default function Profile() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") || "";

  const role = useSelector((state) => state.role.role);
  console.log(role);

  const { user } = useSelector((state) => state.user);
  console.log({ user });

  useEffect(() => {
    axiosInstance
      .get("/auth/profile")
      .then((response) => {
        dispatch(changeRole(response.data.role));
        dispatch(changeUser(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="items-center mx-auto overflow-hidden bg-zink-200">
      <div className="py-10 bg-gray-100 rounded-lg sec1">
        <div className="text-center">
          {user.profilePhoto && (
            <img
              src={user.profilePhoto.url}
              alt=""
              className="mx-auto mt-5 mb-4 rounded-full w-44 h-44"
            />
          )}
          <h1 className="text-3xl font-bold">
            {user.username} <span className="text-gray-400 "> ({role})</span>
          </h1>
          <h3 className="text-3xl font-bold text-gray-800">{user.email}</h3>
          <div className="mt-4">
            <Link
            to="/editProfile"
              className="px-4 m-2 font-bold bg-green-500 bg-green-60 editMyProfile "
         
            >
              Edit my Profile
            </Link>
          </div>
        </div>
    
      </div>
      <div className="m-auto p-auto">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
