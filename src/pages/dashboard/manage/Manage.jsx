
import Swal from "sweetalert2";
// import useInfo from "../../../hooks/useInfo";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";



const Manage = () => {
    // const [info] = useInfo();
    // console.log(info);
    // const {user} = useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure();
    const [axiosSecure] = useAxiosSecure();
    const { data: info = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/info')
        return res.data;
    });



    const handleApprove = user => {
        fetch(`http://localhost:5000/info/approved/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = user => {
        fetch(`http://localhost:5000/info/denied/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-full ml-14 mr-10">
            <h2 className="text-3xl">My added Classes</h2>

            {/* table  */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item </th>
                            <th>Instructor </th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price </th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    {item.instructor}@gmail.com
                                </td>
                                <td>
                                    {item.seats}
                                </td>
                                <td>$ {item.price}</td>
                                <td>
                                    {item.status === 'approved' ? 'approved' : <button onClick={() => handleApprove(item)} className="btn btn-ghost bg-orange-600  text-white">Approve</button>}
                                </td>
                                <td>
                                    {item.status === 'denied' ? 'denied' : <button onClick={() => handleDeny(item)} className="btn btn-ghost bg-orange-600  text-white">Deny</button>}
                                </td>
                                <td>
                                    <button className="btn bg-red-500">Feedback</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default Manage;