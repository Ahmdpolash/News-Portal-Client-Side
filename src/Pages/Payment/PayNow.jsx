import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);
const PayNow = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="my-12">
      <div className="max-w-4xl mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm id={id}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PayNow;
