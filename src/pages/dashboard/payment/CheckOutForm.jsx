import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
// import useCart from "../../../hooks/useCart";

const CheckOutForm = ({ price, cart, id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    // const [cart] = useCart();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        // console.log('card', card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }

        else {
            setCardError('');
            console.log('payment method', paymentMethod);
        }

        setProcessing(true) 

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false)

        console.log(paymentIntent);

        if (paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                // quantity: cart.length,
                // cartItems: cart.map(item => item._id),
                // menuItems: cart.map(item => item.menuItemId),
                classId: id,
                status: 'enrolled',
                itemNames: cart.name
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        // display confirm
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            
        }
    }

    return (
        <>
            <form className="w-2/3  ml-48 mt-10" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-10 ml-64" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            <div className="text-center mt-10">
            {transactionId && <p className="text-green-600">Transaction complete with transactionId: {transactionId}</p>}
            </div>
        </>
    );
};

export default CheckOutForm;