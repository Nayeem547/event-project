import { useContext } from "react";
import logo from "../Navbar/Elogo.png";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()

  }

  return (
    <div className="">
      <nav className="navbar bg-base-100 space-y-7 flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center py-7 mx-auto ">
        <div className=" navbar-center md:navbar-start lg:navbar-start">
          <img className=" w-[155px] h-20 " src={logo} alt="" />
        </div>
        <div className="navbar-center ">
          <ul className=" text-xl font-medium flex mt-5 md:mt-0 lg:mt-0 gap-6 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " bg-[#701e43] px-3 py-2 text-white rounded-tl-3xl rounded-br-3xl "
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#701e43] px-3 py-2 text-white rounded-tl-3xl rounded-br-3xl  "
                    : ""
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " bg-[#701e43] px-3 py-2 text-white rounded-tl-3xl rounded-br-3xl "
                    : ""
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="  navbar-end gap-2">
          {user ? (
            <button onClick={handleSignOut} className=" btn ">Sign Out</button>
          ) : (
            <Link to="/login">
              <button className=" btn "> Login</button>
            </Link>
          )}

          <Link to="/register">
            <button className=" btn "> Regester</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
