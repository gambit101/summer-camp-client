import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/class'>Classes</Link></li>
        

        {
            user ? <><li><Link to='/dashboard'>Dashboard</Link></li><li><button onClick={handleLogOut} className="btn btn-ghost">Logout</button></li><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" /></> : <><li><Link to='/login'>Login</Link></li></>
        }
    </>

    return (
        <div>
            <div className="navbar  bg-red-500 text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="h-11" src="https://cdn.pixabay.com/photo/2020/09/16/18/39/icon-5577198_1280.png" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Sports Hero</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;