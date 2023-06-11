import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaBook, FaClipboard, FaCreativeCommonsBy, FaDoorOpen, FaHome, FaSchool, FaUserFriends, FaWallet } from "react-icons/fa";

const DashBoard = () => {
    const [cart] = useCart();

    // const isAdmin = true;

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


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

                    {isAdmin ? (
                        <>
                            <li className="text-2xl"><NavLink to='/dashboard/manage'><FaUserFriends></FaUserFriends> Manage Classes</NavLink></li>
                            <li className="text-2xl"><NavLink to='/dashboard/allusers'><FaCreativeCommonsBy></FaCreativeCommonsBy> Manage Users</NavLink></li>
                            <div className="divider"></div>
                            <li className="text-2xl"><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                            <li className="text-2xl"><NavLink to='/instructors'><FaClipboard></FaClipboard> Instructors</NavLink></li>
                            <li className="text-2xl"><NavLink to='/class'><FaSchool></FaSchool> Classes</NavLink></li>
                        </>
                    ) : (
                        isInstructor ? (
                            <>
                                <li className="text-2xl"><NavLink to='/dashboard/addItem'>Add a class</NavLink></li>
                                <li className="text-2xl"><NavLink to='/dashboard/manageItems'>My classes</NavLink></li>
                                <div className="divider"></div>
                                <li className="text-2xl"><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                                <li className="text-2xl"><NavLink to='/instructors'><FaClipboard></FaClipboard>Instructors</NavLink></li>
                                <li className="text-2xl"><NavLink to='/class'><FaSchool></FaSchool>Classes</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li className="text-2xl"><NavLink to='/dashboard/myclasses'><FaBook></FaBook> My Classes <span className="text-white badge">+{cart?.length || 0}</span></NavLink></li>
                                <li className="text-2xl"><NavLink to='/dashboard/enrolled'><FaDoorOpen></FaDoorOpen> My Enrolled Classes</NavLink></li>
                                <li className="text-2xl"><NavLink  to='/dashboard/paymentHistory'><FaWallet></FaWallet> Payment History</NavLink></li>
                                <div className="divider"></div>
                                <li className="text-2xl"><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                                <li className="text-2xl"><NavLink to='/instructors'><FaClipboard></FaClipboard>Instructors</NavLink></li>
                                <li className="text-2xl"><NavLink to='/class'><FaSchool></FaSchool>Classes</NavLink></li>
                            </>
                        )
                    )}


                    {/* {
                        isInstructor ? (<li><NavLink to='/dashboard/addItem'>Add a class</NavLink></li>
                        <li><NavLink to='/dashboard/allusers'>My classes</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/instructors'>Instructors</NavLink></li>
                        <li><NavLink to='/class'>Classes</NavLink></li>) :
                            
                         isAdmin  
                            (<li><NavLink to='/dashboard/myclasses'>My Classes <span className="text-white badge">+{cart?.length || 0}</span></NavLink></li>
                            <li><NavLink>My Enrolled Classes</NavLink></li>
                            <li><NavLink>Payment History</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/instructors'>Instructors</NavLink></li>
                            <li><NavLink to='/class'>Classes</NavLink></li>)
                        

                    } */}

                    {/* {
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
                    
                    } */}

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;
