import logo from '../Navbar/Elogo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
        <nav className='navbar bg-base-100 flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center py-7 mx-auto '>
          <div className='navbar-start' ><img className=' w-[155px] h-20 ' src={logo} alt="" /></div>
          <div className="navbar-center hidden lg:flex">
            <ul className=' text-xl font-medium flex mt-5 md:mt-0 lg:mt-0 gap-6 '>
 <li>
        <NavLink
     to="/"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " bg-[#701e43] px-3 py-2 text-white rounded-tl-3xl rounded-br-3xl " : ""
    }
        >
         Home
         </NavLink>
                </li>

 <li>
        <NavLink
     to="/Donation"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " text-[#FF444A] underline " : ""
    }
        >
         Donation
         </NavLink>
                </li>

<li>
        <NavLink
     to="/Statistics"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " text-[#FF444A] underline " : ""
    }
        >
         Statistics
         </NavLink>
                </li>

            </ul>
            </div>

            <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
        </nav>
    </div>
    );
};

export default Navbar;