import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
    const Links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        // <div className="navbar text-white rounded-2xl mt-2 bg-[#9538E2] shadow-sm">
        //     {/* Left Side - Logo & Dropdown */}
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <button tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        //                 </svg>
        //             </button>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        //             >
        //                 {Links}
        //             </ul>
        //         </div>
        //         <NavLink to="/" className="btn btn-ghost text-xl font-bold">
        //             Gadget Heaven
        //         </NavLink>
        //     </div>

        //     {/* Center - Navigation Links */}
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             {Links}
        //         </ul>
        //     </div>
        // </div>
        <div className="navbar text-white rounded-2xl mt-2 bg-[#9538E2] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="indicator mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                </div>
                <div className="indicator mr-4">
                    <FaRegHeart />
                </div>
            </div>   
        </div>
        
    );
};
    


export default NavBar;
