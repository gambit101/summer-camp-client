import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/MAin";
import Home from "../pages/home/home/Home";
import Instructor from "../pages/instructors/Instructor";
import Class from "../pages/class/Class";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import DashBoard from "../layout/DashBoard";
import MyClasses from "../pages/dashboard/myClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItem from "../pages/dashboard/addItem/AddItem";
import InstructorRoute from "./InstructorRoute";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import Manage from "../pages/dashboard/manage/Manage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructor></Instructor>
            },
            {
                path: 'class',
                element: <Class></Class>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addItem',
                element: <InstructorRoute><AddItem></AddItem></InstructorRoute>
            },
            {
                path: 'manageItems',
                element: <InstructorRoute><ManageItems></ManageItems></InstructorRoute>
            },
            {
                path: 'manage',
                element: <Manage></Manage>
            }
        ]
    }
]);