import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for making HTTP requests


export default function Cart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data when the component mounts
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${process.env.baseUrl}/orders/client/65b41665e977b0dc489a7c82`);
      if (response.data){
        setOrders(response.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

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
                <td>{order.serviceOrCourseId}</td>
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
