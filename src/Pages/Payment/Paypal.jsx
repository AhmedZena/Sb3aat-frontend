import React from "react";
import { Link } from "react-router-dom";

export default function Paypal() {
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2 ">
          <div className="bg-gray-100 p-4 rounded-md">
            <Link
              to="/pay"
              className="text-2xl font-bold text-gray-800 text-center m-4"
            >
              Credit Card
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <Link
              to="/paypal"
              className="text-2xl font-bold text-gray-800 text-center m-4"
            >
              PayPal
            </Link>
          </div>
        </div>
        <div className="flex justify-center m-5">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pay by PayPal
          </button>
        </div>
      </div>
    </div>
  );
}
