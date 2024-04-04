import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaInfoCircle } from "react-icons/fa";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import DragsComp from "./DragsComp";
import { useSelector } from "react-redux";

export function CreateCourse() {
  const [personName, setPersonName] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryID, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const { user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    freelancerId: user._id, // Assigning user._id as freelancerId
    title: "",
    description: "",
    categoryId: "",
    price: "",
    duration: "",
    courseMaterial: {},
    CourseImg: "",
    tags: [],
    serviceImage: "",
    isAccepted: false,
  });

  useEffect(() => {
    axios
      .get("https://sb3aat.onrender.com/api/categories")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
        console.log(user._id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://sb3aat.onrender.com/api/subCategories/category/${categoryID}`)
      .then((response) => {
        console.log(response.data.subCategories);
        setSubCategories(response.data.subCategories);
        if (Array.isArray(response.data)) {
          setSubCategories(response.data[0]);
        } else {
          console.error("Subcategories data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryID]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "subCategoryId") {
      setFormData({ ...formData, categoryId: value }); // Set categoryId based on selected subcategory
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleChange = (event) => {
    if (event.target.value.length <= 5) {
      setPersonName(event.target.value);
    }
  };
  
  useEffect(() => {
    setFormData({ ...formData, categoryId: categoryID });
  }, [categoryID]);
  
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://sb3aat.onrender.com/api/courses", formData)
      .then((response) => {
        console.log(formData);
        console.log("Form submitted successfully", response.data);
        alert("Course created successfully!");
      })
      .catch((error) => {
        console.log(formData);

        console.error("Error submitting form", error);
      });
  };

  return (
    <div className="p-5 bg-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="p-2 mt-3">
          <h3 className="text-black">Home</h3>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl">Create New Course</h2>
            <div className="flex items-center">
              <button className="flex items-center px-4 py-2 ml-4 font-bold text-green-500 border-2 border-green-500 rounded hover:bg-green-600 hover:text-white">
                <FaInfoCircle className="inline-block w-5 h-5 mr-2" />
                Advices & Tips for Approval
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-8/12 p-4 bg-white rounded">
            <div className="">
              <h3 className="font-semibold text-black">Course Title</h3>
              <input
                type="text"
                className="w-full p-2 border-2 border-gray-200 rounded"
                placeholder="Enter Course Title"
                value={formData.title}
                name="title"
                onChange={handleInputChange}
              />
              <span>
                <small className="text-gray-500">
                  Enter a clear English title describing the course you wish to
                  offer. Avoid using symbols or phrases like "exclusively","limited
                  time", etc.
                </small>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-black">Description</h3>
              <textarea
                className="w-full p-2 mt-2 border-2 border-gray-200 rounded h-52"
                placeholder="Enter Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
              <span>
                <small className="text-gray-500">
                  Enter a clear English description of the course you wish to offer.
                  Avoid using symbols or phrases like "exclusively","limited time",
                  etc.
                </small>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-black">Price & Total Time</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="w-5/12">
                  <input
                    type="number"
                    className="w-full p-2 border-2 border-gray-200 rounded"
                    placeholder="Enter Price"
                    min="7"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-5/12">
                  <input
                    type="number"
                    className="w-full p-2 border-2 border-gray-200 rounded"
                    placeholder="Enter Total Hours"
                    min="1"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <span>
                <small className="text-gray-500">
                  Set the price and total time of the course you wish to offer.
                </small>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-black">Categories</h3>
              <div className="flex items-center justify-between mt-2 ">
                <div className="w-5/12">
                  <select
                    className="w-full p-2 border-2 border-gray-200 rounded"
                    name="categoryId"
                    id="categories"
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.Name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-5/12">
                  <select
                    className="w-full p-2 border-2 border-gray-200 rounded"
                    name="subCategoryId"
                    id="subcategories"
                    onChange={handleInputChange} // Update onChange event handler
                    value={subCategoryId}
                  >
                    {subCategories.map((subCategory) => (
                      <option key={subCategory._id} value={subCategory._id}>
                        {subCategory.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <span>
                <small className="text-gray-500">
                  Choose the category and subcategory that best fits your course.
                </small>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-black">Image</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="w-[75]">
                  <input
                    type="text"
                    className="w-full p-2 border-2 border-gray-200 rounded"
                    placeholder="Enter Image Link"
                    value={formData.CourseImg}
                    name="CourseImg"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <span>
                <small className="text-gray-500">
                  Add a clear image that reflects the course you wish to offer.
                </small>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-black">Tags</h3>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {[
                    "Programming",
                    "Design",
                    "Marketing",
                    "Writing",
                    "Video & Animation",
                    "Music & Audio",
                    "Business",
                    "Lifestyle",
                    "Data",
                    "Translation",
                    "Legal",
                  ].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <span>
                <small className="text-gray-500">
                  Add tags to your course to help buyers find it.
                  <br />
                  with a maximum of 5 tags.
                </small>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-black">Course Content</h3>
              <DragsComp />
              <span>
                <small className="text-gray-500">
                  Add the content of the course you wish to offer.
                </small>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-black">Terms and Conditions</h3>
              <div className="flex items-center border border-gray-200 rounded ps-4 dark:border-gray-700">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="bordered-checkbox-1"
                  className="w-full py-4 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  The course I am offering is not a violation of the terms of use
                </label>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
              >
                Add Course
              </button>
            </div>
          </div>
          <div className="w-4/12 h-full p-6 ml-2 bg-white rounded">
            <h1 className="mb-4 text-xl font-bold text-center">
              Add Your Course and Start Earning Profits
            </h1>
            <p className="mb-2 text-sm">
              Sb3at allows you to earn profits by adding services you are skilled at
              executing and making them available for sale to interested clients.
              Enter the course details carefully for the Sb3at team to review and
              publish them.
            </p>
            <h2 className="mb-2 text-lg font-semibold">
              Tips for Adding a Correct Course
            </h2>
            <ul className="pl-6 mb-4 list-disc">
              <li>
                <strong>Course Title:</strong> Choose a concise and clear title that
                reflects exactly what you will offer in your course...
              </li>
              <li>
                <strong>Course Description:</strong> Write a distinctive description
                of the course in a correct language free of errors...
              </li>
              <li>
                <strong>Course Gallery:</strong> Add an expressive image of the
                course in addition to at least three exclusive examples...
              </li>
              <li>
                <strong>Course Price:</strong> Make sure to set an appropriate price
                for the course based on the amount of work and effort involved...
              </li>
            </ul>
            <h3 className="mb-2 font-semibold text-md">
              Why Would a Course be Rejected in Sb3at?
            </h3>
            <ul className="pl-6 mb-4 list-disc">
              <li>
                A long, unclear title, or one that combines more than one course
                together...
              </li>
              <li>
                Ignoring to specify the amount of work the buyer will receive in the
                course description...
              </li>
              <li>
                Images or designs of low quality or not prepared by the seller...
              </li>
              <li>
                Attaching less than three examples for the course's work gallery...
              </li>
              <li>Services that violate the terms of use of the Sb3at site.</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
