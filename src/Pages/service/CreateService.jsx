import { FaInfoCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateService() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  //   console.log({ user });
  const [selectedImage, setSelectedImage] = useState("");
  const [personName, setPersonName] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    freelancerId: user._id,
    title: "",
    description: "",
    price: "",
    deliveryTime: "",
    buyerInstruction: "",
    // buyerInstruction: "",
    subCategoryID: "",
    tags: [],
    serviceImage: "",
  });

  const names = [
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
  ];
  const handleChange = (event) => {
    if (event.target.value.length <= 5) {
      setPersonName(event.target.value);
    }
  };

  useEffect(() => {
    axios
      .get("https://sb3aat.onrender.com/api/categories")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://sb3aat.onrender.com/api/subCategories/category/${categoryId}`
      )
      .then((response) => {
        console.log(response.data.subCategories);
        setSubCategories(response.data.subCategories);
        // Check if response data contains subCategories array before setting state
        if (Array.isArray(response.data)) {
          setSubCategories(response.data[0]);
        } else {
          console.error("Subcategories data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "serviceImage") {
      setSelectedImage(value);
    }

    if (name === "category") {
      setCategoryId(value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    // handle all data to be send to the server
    // https://sb3aat.onrender.com/api/services post
    console.log(formData);
    try {
      const response = await axios.post(
        "https://sb3aat.onrender.com/api/services",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success("Service Added Successfully");
     
      navigate("/");

      console.log(response.data);
      toast.success("Service Added Successfully");

    } catch (error) {
      console.error("There was an error!", error);
      toast.error(error.response.data.message);
      if (error.response.status === 401) {
        toast.success("Service failed");
        navigate("/login");
      }
    }
  };

  return (
    <div className="p-5 bg-gray-100">
      {/* first sec */}
      <div className="mt-3 p-2">
        <h3 className="text-black">Home</h3>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl">Create New Service</h2>

          <div className="flex items-center">
            <button className="border-2 border-green-500 text-green-500 flex font-bold py-2 px-4 items-center rounded ml-4  hover:bg-green-600 hover:text-white">
              <FaInfoCircle className="h-5 w-5 mr-2 inline-block" />
              Advices & Tips for Approval
            </button>
          </div>
        </div>
      </div>

      {/* second sec it's two div 4 and 8 */}
      <div className="flex mt-2">
        <div className="w-8/12 p-4 bg-white rounded">
          {/* title */}
          <div className="">
            <h3 className="text-black">Service Title</h3>

            <input
              type="text"
              name="title"
              className="w-full border-2 border-gray-200 p-2 rounded"
              placeholder="Enter Service Title"
              onChange={handleInputChange}
              value={formData.title}
            />

            <span>
              <small className="text-gray-500">
                Enter a clear English title describing the service you wish to
                offer. Avoid using symbols or phrases like
                "exclusively","limited time", etc.
              </small>
            </span>
          </div>

          {/* add categories , subcategories  , it's select input */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Categories</h3>
            <div className=" mt-2 flex items-center justify-between">
              <div className="w-5/12">
                <select
                  className="w-full border-2 border-gray-200   p-2 rounded"
                  name="category"
                  id="categories"
                  onChange={(e) => setCategoryId(e.target.value)}
                  //   onChange={handleInputChange}
                  //   value={formData.category}
                >
                  {/* <option value="1">Select Category</option>
                  <option value="2">Select Category</option>
                  <option value="3">Select Category</option> */}
                  {categories.map((category) => (
                    <option value={category._id}>{category.Name}</option>
                  ))}
                </select>
              </div>
              <div className="w-5/12">
                <select
                  className="w-full border-2 border-gray-200   p-2 rounded"
                  name="subCategoryID"
                  id="subCategoryID"
                  //   onChange={handleSubCategoryChange}
                  onChange={handleInputChange}
                  value={formData.subCategoryID}
                >
                  {/* <option value="1">Select Sub Category</option>
                  <option value="2">Select Sub Category</option>
                  <option value="3">Select Sub Category</option> */}
                  {subCategories.map((subCategory) => (
                    <option value={subCategory._id}>{subCategory.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <span>
              <small className="text-gray-500">
                Choose the category and subcategory that best fits your service.
              </small>
            </span>
          </div>

          {/* description */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Description</h3>
            <textarea
              className="mt-2 w-full border-2 border-gray-200   p-2 rounded h-52"
              placeholder="Enter Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <span>
              <small className="text-gray-500">
                Enter a clear English description of the service you wish to
                offer. Avoid using symbols or phrases like
                "exclusively","limited time", etc.
              </small>
            </span>
          </div>

          {/* imgs  upload */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Enter Images</h3>
            <input
              type="url"
              className="w-full border-2 border-gray-200   p-2 rounded"
              placeholder="Enter Image URL"
              //   onChange={(e) => {
              //     setSelectedImage(e.target.value);
              //   }}
              onChange={handleInputChange}
              value={formData.serviceImage}
              name="serviceImage"
            />

            <span>
              <small className="text-gray-500">
                Add an image that represents your service.
              </small>
            </span>
          </div>

          {selectedImage && (
            <div className="mt-4">
              <h3 className="text-black font-semibold">Selected Image</h3>
              <img
                src={selectedImage}
                alt="selected image"
                className="w-1/2 h-1/2"
              />
            </div>
          )}

          {/* price , delivery time */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Price & Delivery Time</h3>
            <div className="mt-2 flex items-center justify-between">
              <div className="w-5/12">
                <input
                  type="number"
                  className="w-full border-2 border-gray-200   p-2 rounded"
                  placeholder="Enter Price"
                  min="7"
                  name="price"
                  onChange={handleInputChange}
                  value={formData.price}
                />
              </div>
              <div className="w-5/12">
                <select
                  className="w-full border-2 border-gray-200   p-2 rounded"
                  name="deliveryTime"
                  onChange={handleInputChange}
                  value={formData.deliveryTime}
                >
                  {/* <option value="1">Select Delivery Time</option>
                  <option value="2">Select Delivery Time</option>
                  <option value="3">Select Delivery Time</option> */}
                  {/*  one day , two , three , four , five 
                  one week , two , three , one month  */}
                  <option value="1">One Day</option>
                  <option value="2">Two Days</option>
                  <option value="3">Three Days</option>
                  <option value="4">Four Days</option>
                  <option value="5">Five Days</option>
                  <option value="6">One Week</option>
                  <option value="7">Two Weeks</option>
                  <option value="8">Three Weeks</option>
                  <option value="9">One Month</option>
                </select>
              </div>
            </div>
            <span>
              <small className="text-gray-500">
                Set a price and delivery time for your service. You can change
                these later.
              </small>
            </span>
          </div>

          {/* tags , multi select input */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Tags</h3>
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
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <span>
              <small className="text-gray-500">
                Add tags to your service to help buyers find it.
                <br />
                with a maximum of 5 tags.
              </small>
            </span>
          </div>

          {/* Buyer Instruction */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Buyer Instruction</h3>
            <textarea
              className="mt-2 w-full border-2 border-gray-200  p-2 rounded h-52"
              placeholder="Enter Buyer Instruction"
              name="buyerInstruction"
              onChange={handleInputChange}
              value={formData.buyerInstruction}
            ></textarea>
            <span>
              <small className="text-gray-500">
                Add any instructions that buyers need to follow to get the
                service.
              </small>
            </span>
          </div>

          {/* terms and conditions */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Terms and Conditions</h3>

            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-checkbox-1"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                The service I am offering is legal and does not violate any law
              </label>
            </div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-2"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-checkbox-2"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                All the information I provided is correct
              </label>
            </div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-3"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-checkbox-3"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I have read and agree to the{" "}
                <a href="#" className="text-green-500 hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>
          </div>
          {/* submit */}
          <div className="mt-4">
            <button
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              onClick={handleSubmit}
            >
              Add Service
            </button>
          </div>
        </div>

        <div class="bg-white ml-2 p-6 rounded w-4/12 h-full">
          <h1 class="text-xl font-bold text-center mb-4">
            Add Your Service and Start Earning Profits
          </h1>
          <p class="text-sm mb-2">
            Sb3at allows you to earn profits by adding services you are skilled
            at executing and making them available for sale to interested
            clients. Enter the service details carefully for the Sb3at team to
            review and publish them.
          </p>

          <h2 class="text-lg font-semibold mb-2">
            Tips for Adding a Correct Service
          </h2>
          <ul class="list-disc pl-6 mb-4">
            <li>
              <strong>Service Title:</strong> Choose a concise and clear title
              that reflects exactly what you will offer in your service...
            </li>
            <li>
              <strong>Service Description:</strong> Write a distinctive
              description of the service in a correct language free of errors...
            </li>
            <li>
              <strong>Service Gallery:</strong> Add an expressive image of the
              service in addition to at least three exclusive examples...
            </li>
            <li>
              <strong>Service Price:</strong> Make sure to set an appropriate
              price for the service based on the amount of work and effort
              involved...
            </li>
          </ul>

          <h3 class="text-md font-semibold mb-2">
            Why Would a Service be Rejected in Sb3at?
          </h3>
          <ul class="list-disc pl-6 mb-4">
            <li>
              A long, unclear title, or one that combines more than one service
              together...
            </li>
            <li>
              Ignoring to specify the amount of work the buyer will receive in
              the service description...
            </li>
            <li>
              Images or designs of low quality or not prepared by the seller...
            </li>
            <li>
              Attaching less than three examples for the service's work
              gallery...
            </li>
            <li>Services that violate the terms of use of the Sb3at site.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateService;
