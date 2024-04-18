import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUser } from "../../Store/slices/user";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    "profilePhoto.url": user.profilePhoto.url,
    username: user.username,
    password: "", // Initialize with empty string
    bio: user.bio || "", // Initialize with existing bio or empty string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        // `http://localhost:8800/api/auth/editUser/${user._id}`,
        `https://sb3aat.onrender.com/api/auth/editUser/${user._id}`,
        {
          ...formData,
        }
      );

      dispatch(changeUser(response.data)); // Assuming the server returns the updated user data
      //   alert("User updated successfully!");
      toast.success("User updated successfully!");
      navigate("/profile");
    } catch (error) {
      //   console.error("Error updating user:", error);
      toast.error("Error updating user:", error);
    }
    // alert("User updated successfully!");
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center h-full bg-[#ECEFF4]">
      <div className="container flex flex-col p-5 mx-auto bg-white w-[800px] mt-20 mb-20 rounded-2xl shadow-2xl">
        <div className="text-2xl font-bold">
          <h1>Personal Information</h1>
          <hr className="mb-3" />
          <p>
            Your account information is verified. If you modify it, you may need
            to re-verify it again.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 font-bold">
            <img
              src={formData["profilePhoto.url"]}
              alt="Profile"
              className="mx-auto mt-5 mb-4 rounded-full w-44 h-44"
            />
            <label htmlFor="profilePhotoUrl">Edit Profile Photo</label>
            <input
              type="text"
              name="profilePhotoUrl"
              value={formData.profilePhotoUrl}
              onChange={handleChange}
              className="w-full form-control h-14"
            />
            <label htmlFor="username">Edit Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full form-control h-14"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full form-control h-14"
              required
            />
            <label htmlFor="bio">Edit Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Edit Bio"
              className="w-full form-control h-[200px]"
            />
            <button
              type="submit"
              className="w-[200px] mt-5 p-3 rounded-3xl items-center text-white font-bold bg-green-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
