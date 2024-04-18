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
        //     return actions.order.capture().then((details) => {
        //       // alert("Thanks for your payment!" + details.payer.name.given_name);
        //       toast.success(
        //         "Thanks for your payment!" + details.payer.name.given_name
        //       );
        //     }
        
        
        // );

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

  // useEffect(() => {
  //   console.log("payment button container aaaaaaaaaaaaaaaaaaaaaa");
  // },[]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <>
      <div id="buttonPaypal"></div>
    </>
  );
}

// import React, { useEffect, useState } from "react";

// export default function Paypal({ totalPrice }) {
//   const [paypalLoaded, setPaypalLoaded] = useState(false);

//   useEffect(() => {
//     if (!paypalLoaded) {
//       window.paypal
//         .Buttons({
//           createOrder: (data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     currency_code: "USD",
//                     value: totalPrice,
//                   },
//                 },
//               ],
//             });
//           },
//           onApprove: (data, actions) => {
//             return actions.order.capture().then((details) => {
//               alert("Thanks for your payment! " + details.payer.name.given_name);
//             });
//           },
//         })
//         .render("#paypal-button-container");

//       setPaypalLoaded(true);
//     }
//   }, [totalPrice]);

//   return (
//     <div id="paypal-button-container">
//       {!paypalLoaded && <button disabled>Loading PayPal...</button>}
//     </div>
//   );
// }
