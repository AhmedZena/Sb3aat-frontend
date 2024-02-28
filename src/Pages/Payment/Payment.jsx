import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2">
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

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2 mt-3"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="your card number"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="expiry"
                className="block text-gray-700 font-bold mb-2"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block text-gray-700 font-bold mb-2"
              >
                CVC
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="123"
                required
              />
            </div>
          </div>
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <p className="text-sm m-2">
              Save this card to facilitate future payment
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
