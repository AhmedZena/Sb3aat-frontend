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
// import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
// import { DataGridPro } from "@mui/x-data-grid-pro";
// import { useDemoData } from "@mui/x-data-grid-generator";
import DragsComp from "./DragsComp";

function updateRowPosition(initialIndex, newIndex, rows) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const rowsClone = [...rows];
      const row = rowsClone.splice(initialIndex, 1)[0];
      rowsClone.splice(newIndex, 0, row);
      resolve(rowsClone);
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export function CreateCourse() {
  const [personName, setPersonName] = useState([]);

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
          <h2 className="text-3xl">Create New Course</h2>

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
            <h3 className="text-black font-semibold">Course Title</h3>

            <input
              type="text"
              className="w-full border-2 border-gray-200   p-2 rounded"
              placeholder="Enter Course Title"
            />
            <span>
              <small className="text-gray-500">
                Enter a clear English title describing the course you wish to
                offer. Avoid using symbols or phrases like
                "exclusively","limited time", etc.
              </small>
            </span>
          </div>
          {/* sub title */}
          <div className="">
            <h3 className="text-black font-semibold">Course Sub Title</h3>

            <input
              type="text"
              className="w-full border-2 border-gray-200   p-2 rounded"
              placeholder="Enter Course sub Title"
            />
            <span>
              <small className="text-gray-500">
                Enter a clear English sub titile describing the course you wish
                to offer. Avoid using symbols or phrases like
                "exclusively","limited time", etc.
              </small>
            </span>
          </div>
          {/* main languages and other language  */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Languages</h3>
            <div className=" mt-2 flex items-center justify-between">
              <div className="w-7/12">
                <select
                  className="w-full border-2 border-gray-200   p-2 rounded"
                  name="mainLanguage"
                  id="mainLanguage"
                >
                  <option value="1">English</option>
                  <option value="2">Arabic</option>
                  <option value="3">French</option>
                </select>
              </div>
            </div>
            <span>
              <small className="text-gray-500">Choose the main language</small>
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
                Choose the category and subcategory that best fits your course.
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
                Enter a clear English description of the course you wish to
                offer. Avoid using symbols or phrases like
                "exclusively","limited time", etc.
              </small>
            </span>
          </div>
          {/* link img */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Image</h3>
            <div className="mt-2 flex items-center justify-between">
              <div className="w-5/12">
                <input
                  type="text"
                  className="w-full border-2 border-gray-200   p-2 rounded"
                  placeholder="Enter Image Link"
                />
              </div>
            </div>
            <span>
              <small className="text-gray-500">
                Add a clear image that reflects the course you wish to offer.
              </small>
            </span>
          </div>
          {/* price , total time videos */}
          <div className="mt-4">
            <h3 className="text-black font-semibold">Price & Total Time</h3>
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
                {/*  how many hourses that course */}
                <input
                  type="number"
                  className="w-full border-2 border-gray-200   p-2 rounded"
                  placeholder="Enter Total Hours"
                  min="1"
                />
              </div>
            </div>
            <span>
              <small className="text-gray-500">
                Set the price and total time of the course you wish to offer.
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
                Add tags to your course to help buyers find it.
                <br />
                with a maximum of 5 tags.
              </small>
            </span>
          </div>
          {/*Course content */}

          <div className="mt-4">
            <h3 className="text-black font-semibold">Course Content</h3>

            {/* add course content*/}
            <DragsComp />
            <span>
              <small className="text-gray-500">
                Add the content of the course you wish to offer.
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
                htmlFor="bordered-checkbox-1"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                The course I am offering is not a violation of the terms of use
              </label>
            </div>
          </div>
          {/* submit */}
          <div className="mt-4">
            <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Add Course
            </button>
          </div>
        </div>

        <div className="bg-white ml-2 p-6 rounded w-4/12 h-full">
          <h1 className="text-xl font-bold text-center mb-4">
            Add Your Course and Start Earning Profits
          </h1>
          <p className="text-sm mb-2">
            Sb3at allows you to earn profits by adding services you are skilled
            at executing and making them available for sale to interested
            clients. Enter the course details carefully for the Sb3at team to
            review and publish them.
          </p>

          <h2 className="text-lg font-semibold mb-2">
            Tips for Adding a Correct Course
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Course Title:</strong> Choose a concise and clear title
              that reflects exactly what you will offer in your course...
            </li>
            <li>
              <strong>Course Description:</strong> Write a distinctive
              description of the course in a correct language free of errors...
            </li>
            <li>
              <strong>Course Gallery:</strong> Add an expressive image of the
              course in addition to at least three exclusive examples...
            </li>
            <li>
              <strong>Course Price:</strong> Make sure to set an appropriate
              price for the course based on the amount of work and effort
              involved...
            </li>
          </ul>

          <h3 className="text-md font-semibold mb-2">
            Why Would a Course be Rejected in Sb3at?
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              A long, unclear title, or one that combines more than one course
              together...
            </li>
            <li>
              Ignoring to specify the amount of work the buyer will receive in
              the course description...
            </li>
            <li>
              Images or designs of low quality or not prepared by the seller...
            </li>
            <li>
              Attaching less than three examples for the course's work
              gallery...
            </li>
            <li>Services that violate the terms of use of the Sb3at site.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
