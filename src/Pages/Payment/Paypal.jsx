import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export default function ({ totalPrice }) {
  const hasRun = useRef(false); // Use a ref to track execution

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

        axios.patch(`https://sb3aat.onrender.com/api/payment/${cartId}` , {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            })
            .then((response) => {
                console.log(response.data);
                toast.success("Payment successful");
                // navigate("/profile");
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
  }, [totalPrice]);


  return (
    <>
      <div id="buttonPaypal"></div>
    </>
  );
}
