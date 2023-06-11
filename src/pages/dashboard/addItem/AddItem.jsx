import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            console.log(imgResponse);
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {email, instructor, price, seats, name} = data;
                const newItem = {name, price: parseFloat(price), instructor, email, seats, image: imgURL}
                console.log(newItem);
                axiosSecure.post('/info', newItem)
                .then(data =>{
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            }
        })
    }
    console.log(img_hosting_token);
    return (
        <div>
            <h2 className="text-5xl text-center text-red-500 font-semibold my-6">Add a class</h2>
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
                {/* name  */}

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>

                {/* instructor name  */}

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-semibold">Instructor Name</span>
                    </label>
                    <input type="text" placeholder={user?.displayName} {...register("instructor", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>

                {/* email */}

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-semibold">Instructor Email</span>
                    </label>
                    <input type="email" placeholder={user?.email} {...register("email", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>

                {/* seats */}

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-semibold">Available Seats</span>
                    </label>
                    <input type="text" placeholder="Available Seats" {...register("seats", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>

                {/* price */}

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-semibold">Price</span>
                    </label>
                    <input type="number" placeholder="Price" {...register("price", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>

                {/* file input */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true, maxLength: 120 })} className="file-input file-input-bordered file-input-error w-full max-w-xs" />
                </div>

                <input className="btn my-4" type="submit" value="Add Class" />

            </form>
        </div>
    );
};

export default AddItem;