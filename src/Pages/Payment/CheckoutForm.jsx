import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const CheckoutForm = ({ id }) => {
  console.log(id);

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();

  const stripe = useStripe();
  const elements = useElements();

  const axiosPublic = useAxiosPublic();

  const { data: users = {} } = useQuery({
    queryKey: [user.email, "users"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users`);
      return res.data;
    },
  });

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .post("/create-payment-intent", {
          price: parseInt(id),
        })
        .then((res) => {
          console.log(res.data?.clientSecret);
          setClientSecret(res.data?.clientSecret);
        });
    }
  }, [user.email]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        console.log(paymentIntent.id);
        console.log(transactionId, "transaction");
        const info = {
          premiumTaken: "true",
          transactionId: paymentIntent.id,
          amount: paymentIntent.amount,
        };
        console.log(info);

        const res = await axiosPublic.patch(`/users/${user.email}`, info);

        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="my-3 btn btn-sm btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>

        <p className="text-red-600"> {error} </p>
        {transactionId && <p className="text-green-600"> {transactionId} </p>}
      </form>
    </div>
  );
};

export default CheckoutForm;

// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (card == null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       console.log("[error]", error);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="my-3 btn btn-sm bg-red-700 text-white py-2 rounded-md px-4"
//           type="submit"
//           disabled={!stripe}
//         >
//           Pay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;
