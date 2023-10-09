
import Home from '../Home/Home';
import MainLayout from '../Layout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

import Details from '../Details/Details';
import PrivateRoute from '../PrivetRoute/PrivateRoute';


const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
    
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('/event.json'),
                
            },
            {
                path: "/login",
                element : <Login></Login>

            },
            {
                path : "/register",
                element: <Register></Register>
            },
            {
                path : "/detail/:id",
                element : <PrivateRoute><Details></Details></PrivateRoute>,
                loader : ()=> fetch('/event.json'),
            }
        ]
    }
]) 

export default router;