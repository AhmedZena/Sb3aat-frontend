import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Cart() {
  const [orders, setOrders] = useState([]);
  const [initialTotalPrices, setInitialTotalPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No token found");
          return;
        }

        const response = await axios.get(
          `${process.env.baseUrl}/orders/client/${user._id}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.data) {
          setOrders(response.data);
          setInitialTotalPrices(response.data.map((order) => order.totalPrice));
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleNumOrderedChange = (index, value) => {
    const updatedOrders = [...orders];
    updatedOrders[index].numsOrdered = parseInt(value);
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
  }

  return (
    <div className="container px-4 mx-auto mt-12 mb-4">
      <div className="px-6 py-8 bg-gray-100 rounded-md shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2">Services</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Total Price</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">
                  {order.service ? (
                    <>
                      <span className="font-semibold">
                        {order.service.title}
                      </span>
                      <img
                        className="w-32 h-20 mt-2 ml-2"
                        src={order.service.serviceImgSrc}
                        alt="Service"
                      />
                    </>
                  ) : order.course ? (
                    <>
                      <span className="font-semibold">
                        {order.course.Title}
                      </span>
                      <img
                        className="w-32 h-20 mt-2 ml-2"
                        src={order.course.CourseImg}
                        alt="Course"
                      />
                    </>
                  ) : null}
                </td>
                <td className="py-4 font-semibold">{initialTotalPrices[index]}$</td>
                <td className="py-4">
                  <select
                    value={order.numsOrdered}
                    onChange={(e) =>
                      handleNumOrderedChange(index, e.target.value)
                    }
                    className="px-2 py-1 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-4 font-semibold">
                  {order.totalPrice
                    ? order.totalPrice * order.numsOrdered
                    : "0"}
                  $
                </td>
                <td className="py-4">
                  <button
                    onClick={() => handleDeleteOrder(index)}
                    className="font-bold text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          <Link
            to="/pay"
            className="px-4 py-2 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600"
          >
            Pay
          </Link>
        </div>
      </div>
    </div>
  );
}
