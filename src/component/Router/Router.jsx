
import Home from '../Home/Home';
import MainLayout from '../Layout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
    
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('/event.json'),
                
            }
        ]
    }
]) 

export default router;