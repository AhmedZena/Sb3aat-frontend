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

        const response = await axios.get(`${process.env.baseUrl}/cart`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response);
        if (response.data) {
          setOrders(response.data.cartItems);
          setInitialTotalPrices(response.data.totalCartPrice);
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

  const handleNumOrderedChange = async (value, cart) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found");
        return;
      }
      console.log(value, cart);

      const response = await axios.post(
        `${process.env.baseUrl}/cart`,
        {
          quantity: value,
          productId: cart.product._id,
          productType: cart.productType,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response);
      if (response.data) {
        setOrders(response.data.cartItems);
        setInitialTotalPrices(response.data.totalCartPrice);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Error fetching orders");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteOrder = async (id) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found");
        return;
      }

      const response = await axios.delete(
        `${process.env.baseUrl}/cart/removeProduct/${id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response);
      if (response.data) {
        setOrders(response.data.cartItems);
        setInitialTotalPrices(response.data.totalCartPrice);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Error fetching orders");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAllItems = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found");
        return;
      }

      const response = await axios.delete(
        `${process.env.baseUrl}/cart/removeAllProducts`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response);
      if (response.data) {
        setOrders([]);
        setInitialTotalPrices(0);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error deleting all items:", error);
      setError("Error deleting all items");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center h-screen">Cart Is Empty</div>;
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
            {orders &&
              orders.map((cart, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-4">
                    {cart.productType === "service" ? (
                      <>
                        <span className="font-semibold">
                          {cart.product.title}
                        </span>
                        <img
                          className="w-40 h-28 mt-2 ml-2"
                          src={cart.product.serviceImgSrc}
                          alt="Service"
                        />
                      </>
                    ) : cart.productType === "course" ? (
                      <>
                        <span className="font-semibold">
                          {cart.product.title}
                        </span>
                        <img
                          className="w-40 h-28 mt-2 ml-2"
                          src={cart.product.CourseImg}
                          alt="Course"
                        />
                      </>
                    ) : null}
                  </td>
                  <td className="py-4 font-semibold">
                    {cart.productType === "service"
                      ? cart.product.price
                      : cart.product.price}
                    $
                  </td>
                  <td className="py-4">
                    {cart.productType === "service" && (
                      <select
                        value={cart.quantity}
                        onChange={(e) =>
                          handleNumOrderedChange(
                            e.target.value,
                            cart
                            // (productType = cart.productType),
                            // (productId = cart.product._id)
                          )
                        }
                        className="px-2 py-1 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    )}
                  </td>
                  <td className="py-4 font-semibold">{cart.price}$</td>
                  <td className="py-4">
                    <button
                      onClick={() => handleDeleteOrder(cart.product._id)}
                      className="text-red-500 font-bold hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              
          </tbody>
        </table>
        <div className="flex justify-around mt-6">
          <Link
            to="/pay"
            className="px-2 py-2 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600"
          >
            Pay Now 
          </Link>
          <Link
            to="/cart"
            onClick={handleDeleteAllItems}
            className="px-2 py-2 text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600 ml-2"
          >
            Delete all Items
          </Link>
         <span>{initialTotalPrices}</span>
        </div>
      </div>
    </div>
  );
}
