import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function ({ totalPrice, cartId }) {
  const hasRun = useRef(false); // Use a ref to track execution
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!hasRun.current) {
      console.log("payment button container ");
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: totalPrice,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            console.log(cartId, token);
            axios
              .patch(
                `https://sb3aat.onrender.com/api/cart/payment/${cartId}`,
                {},
                {
                  headers: {
                    Authorization: token ? `${token}` : "", // Check if token exists
                  },
                }
              )
              .then((response) => {
                console.log(response.data);
                toast.success("Payment successful");
                window.location.reload();
              })

              .catch((error) => {
                console.error("There was an error!", error);
                toast.error("Payment failed");
              });
          },
        })
        .render("#buttonPaypal");
      hasRun.current = true; // Set to true after first run
    }
  }, [totalPrice, cartId, token]); // Include token as a dependency

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

  // if (error) {
  //   return <div className="text-center h-screen">Cart Is Empty</div>;
  // }

  return <div id="buttonPaypal"></div>;
}
