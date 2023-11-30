import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import Container from "../Shared/Container/Container";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);
const PayNow = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Container>
      <div className="my-12 bg-gray-50 h-[70vh]">
        <div className="bg-base-300 rounded-xl lg:w-1/2  px-2 mb-3 text-white mx-auto">
          <Elements stripe={stripePromise}>
            <CheckoutForm id={id}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </Container>
  );
};

export default PayNow;
