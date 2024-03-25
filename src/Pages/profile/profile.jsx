import Button from "react-bootstrap/Button";

import "./profile.css";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Profile() {


  const role  =useSelector((state)=>state.role.role)
console.log(role);
  return (

    <div className="container-fluid bg-zink-200 items-center ">
      <div className="container sec1 bg-gray-100 py-5 rounded-lg">
        <div className="text-center">
          <img
            src="https://cdn-icons-png.freepik.com/512/6478/6478099.png"
            alt=""
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h1 className="text-xl font-bold">Mahmoud Saad</h1>
          <h3 className="text-gray-800 font-bold">New user</h3>
          <div className="mt-4">
            <Button
              className="bg-green-600 editMyProfile m-3"
              variant="success"
            >
              Edit my Profile
            </Button>
          </div>
        </div>
        <div className="Tabs">
          <ul className="list-reset flex border-b rtl:">
            <li className="-mb-px mr-1">
              <NavLink
                to="/profile"
                className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold"
                style={{ borderBottom: "2px solid transparent" }}
                activeStyle={{ borderBottom: "none" }}
              >
                Personal Profile
              </NavLink>
            </li>
            <li className="mr-1">
              <NavLink
                to="/profile/myServices"
                className="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold"
                style={{ borderBottom: "2px solid transparent" }}
                activeStyle={{ borderBottom: "none" }}
              >
                My Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
