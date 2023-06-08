import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart();

    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-red-500 text-base-content">


                    {
                        isAdmin ? <>
                            <li><NavLink to='/'>Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'>Manage Users</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/instructors'>Instructors</NavLink></li>
                            <li><NavLink to='/class'>Classes</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashboard/myclasses'>My Classes <span className="text-white badge">+{cart?.length || 0}</span></NavLink></li>
                            <li><NavLink>My Enrolled Classes</NavLink></li>
                            <li><NavLink>Payment History</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/instructors'>Instructors</NavLink></li>
                            <li><NavLink to='/class'>Classes</NavLink></li>
                        </>
                    }

                    {/* Sidebar content here */}

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;