import { FaInfoCircle } from "react-icons/fa";
import React, { useState } from "react";
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

function CreateService() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [personName, setPersonName] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      // Create URLs from the new files
      const newFilesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // Combine new and old images, but keep only the first three
      setSelectedImages((prevImages) => {
        const combinedImages = [...prevImages, ...newFilesArray];
        return combinedImages.slice(0, 3);
      });
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          src={photo}
          key={photo}
          alt="preview"
          className="w-32 h-32 object-cover mr-2"
        />
      );
    });
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const handleChange = (event) => {
    // const {
    //   target: { value },
    // } = event;
    // setPersonName(
    //   // On autofill we get a stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );

    // maximum 5 tags
    if (event.target.value.length <= 5) {
      setPersonName(event.target.value);
    }
  };

  return (
    <div className="p-5 bg-gray-100">
      {/* first sec */}
      <div className="mt-3 p-2">
        <h3 className="text-black">Home</h3>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl">Craete New Service</h2>

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
              className="w-full border-2 border-gray-200   p-2 rounded"
              placeholder="Enter Service Title"
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
                  name="categories"
                  id="categories"
                >
                  <option value="1">Select Category</option>
                  <option value="2">Select Category</option>
                  <option value="3">Select Category</option>
                </select>
              </div>
              <div className="w-5/12">
                <select
                  className="w-full border-2 border-gray-200   p-2 rounded"
                  name="subcategories"
                  id="subcategories"
                >
                  <option value="1">Select Sub Category</option>
                  <option value="2">Select Sub Category</option>
                  <option value="3">Select Sub Category</option>
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
            <h3 className="text-black font-semibold">Upload Images</h3>
            <div className="mt-2 flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-200   border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-green-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold"> Drag and drop </span>{" "}
                    Images here
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>

            <span>
              <small className="text-gray-500">
                Upload images that best represent your service. You can upload
                up to 3 images.
              </small>
            </span>
            <div className=" items-center sm:flex   justify-evenly mt-2">
              {renderPhotos(selectedImages)}
            </div>
          </div>

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
                />
              </div>
              <div className="w-5/12">
                <select className="w-full border-2 border-gray-200   p-2 rounded">
                  <option value="1">Select Delivery Time</option>
                  <option value="2">Select Delivery Time</option>
                  <option value="3">Select Delivery Time</option>
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
            <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
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
