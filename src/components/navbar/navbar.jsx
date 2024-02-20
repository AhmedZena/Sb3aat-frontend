import "./navbar";
import { Router, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    // <div>Navbar</div>
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-5">
          <div className="flex items-center">
            <NavLink to="/" className="text-white text-2xl font-bold">
              <span className="text-red-500">S</span>ervices
            </NavLink>
          </div>
          <div className="flex items-center">
            <NavLink to="/" className="text-white mr-5">
              Home
            </NavLink>
            <NavLink to="/service" className="text-white mr-5">
              service
            </NavLink>
            <NavLink to="/profile" className="text-white mr-5">
              Profile
            </NavLink>
            <NavLink to="/categories" className="text-white mr-5">
              Categories
            </NavLink>
            <NavLink to="/profile/myServices" className="text-white mr-5">
              My Services
            </NavLink>
            <NavLink to="/profile/personal" className="text-white mr-5">
              Personal Profile
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
