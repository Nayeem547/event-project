
import Home from '../Home/Home';
import MainLayout from '../Layout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

import Details from '../Details/Details';
import PrivateRoute from '../PrivetRoute/PrivateRoute';
import Error from '../ErrorPage/Error';
import About from '../About/About';
import Blog from '../Blog/Blog';


const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <Error></Error>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('/event.json'),
                
            },
            {
            path : "/about",
            element: <About></About>
            },
            {
                path : "/blog",
                element: <Blog></Blog>
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