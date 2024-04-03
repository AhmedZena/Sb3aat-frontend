import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-lg px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md">
        <img src="https://th.bing.com/th/id/OIP.gzVRPrrQdqQV1-y3qfO82QHaEK?rs=1&pid=ImgDetMain" alt="" className="w-full mt-5 mb-5" />
        <div className="grid grid-cols-2">
          <div className="p-4 bg-gray-100 rounded-md">
            <Link
              to="/pay"
              className="m-4 text-2xl font-bold text-center text-gray-800"
            >
              Credit Card
            </Link>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <Link
              to="/paypal"
              className="m-4 text-2xl font-bold text-center text-gray-800"
            >
              PayPal
            </Link>
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mt-3 mb-2 font-bold text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              placeholder="your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block mb-2 font-bold text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              placeholder="your card number"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="expiry"
                className="block mb-2 font-bold text-gray-700"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block mb-2 font-bold text-gray-700"
              >
                CVC
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="123"
                required
              />
            </div>
          </div>
          <div className="flex items-center w-full">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <p className="m-2 text-sm">
              Save this card to facilitate future payment
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-green-700 rounded hover:bg-green-500 focus:outline-none focus:shadow-outline"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
