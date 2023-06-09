import useInfo from "../../../hooks/useInfo";

const ManageItems = () => {
    const [info] = useInfo();
    return (
        <div className="w-full ml-14">
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
                            <th>Price </th>
                            <th>Status</th>
                            <th>Update</th>
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
                                <td>$ {item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">{item.status}</button>
                                </td>
                                <td>
                                   <button className="btn bg-red-500">Update</button>
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

export default ManageItems;