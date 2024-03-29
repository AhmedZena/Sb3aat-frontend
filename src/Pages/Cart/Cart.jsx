import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Cart() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 const { user } = useSelector((state) => state.user);
 
  console.log({ user });


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); 

        if (!token) {
          setError("No token found");
          return;
        }

        // Send token to server for verification
        const response = await axios.get(`${process.env.baseUrl}/orders/client/${user._id}`, {
          headers: {
            Authorization: `${token}`, 
          },
        });

        // Set orders data if request is successful
        if (response.data) {
          setOrders(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders");
      } finally {
        setIsLoading(false); // Update loading state
      }
    };

    // Call fetchOrders function
    fetchOrders();
  }, []);

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render orders data
  return (
    <div className="container">
      <div className="cartHeading bg-[#f5f5f5] flex flex-col p-10 pl-1 pt-1 m-60 mb-20 justify-between items-center">
        {/* Render your orders data */}
        <table className="w-full m-auto table-auto">
          <thead>
            <tr className="h-40 text-center font-bold">
              <th>Services</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>TotalPrice</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="h-40">
                <td><img src ={order.service.serviceImg}/></td>
                <td>{order.totalPrice}</td>
                <td>{order.numsOrdered}</td>
                <td>{order.isPaid}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center">
          <Link to="/pay" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Pay
          </Link>
        </div>
      </div>
    </div>
  );
}
