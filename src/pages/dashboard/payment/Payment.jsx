import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../hooks/useCart";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [cart] = useCart();
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    const {id} = useParams();
    console.log(id);
    const myClass = cart.find(obj => obj._id == id)
    console.log(myClass);
    const price = myClass?.price;
    console.log(price);
    return (
        <div className="w-full"> 
            <h2 className="text-3xl">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={myClass} price={price} id={id}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;