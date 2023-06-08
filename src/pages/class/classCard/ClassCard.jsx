import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const ClassCard = ({ cls }) => {
    const { image, name, instructor, price, _id } = cls;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();


    const handleAddToCart = cls => {
        console.log(cls);
        if (user && user.email) {
            const cartItem = {clsId: _id, name, image, price, email: user.email} 
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please login to buy the course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-80 h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-white">{name}</h2>
                <h2 className="card-title">Instructor: {instructor}</h2>
                <h2 className="card-title">Price: {price}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(cls)} className="btn bg-red-500 text-black">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;