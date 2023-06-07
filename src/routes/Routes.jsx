import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/MAin";
import Home from "../pages/home/home/Home";
import Instructor from "../pages/instructors/Instructor";
import Class from "../pages/class/Class";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

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
]);