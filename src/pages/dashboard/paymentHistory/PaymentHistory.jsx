import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import { Link } from "react-router-dom";

const PaymentHistory = () => {
    const [history, setHistory] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:5000/pay')
            .then(res => res.json())
            .then(data => setHistory(data.filter(item => item.email === user.email)))
    }, [])

    return (
        <div className="w-full px-36">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h2 className="text-3xl badge">Total Payments: {history.length}</h2>
                {/* <h2 className="text-3xl">Total Price: ${total}</h2> */}
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-red-500 text-white font-bold">
                        <tr>
                            <th>#</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Class Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Payment Date</th>
                            <th className="text-center">Transaction Id</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td className="text-center">
                                    {item.email}
                                </td>
                                <td className="uppercase text-center">
                                    {item.itemNames}
                                </td>
                                <td className="text-center">${item.price}</td>
                                <td className="text-center">
                                    {item.date}
                                </td>
                                <td className="text-center">
                                    {item.transactionId}
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;