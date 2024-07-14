import { Link, NavLink, useNavigate } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";

const NavBar = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then()
            .catch()
        navigate('/')

    }
    const links = <>
        <li ><NavLink to="/" className="navlist">Home</NavLink></li>
        <li><NavLink to="listed-books" className="navlist">Listed Books</NavLink></li>
        <li><NavLink to="/pages-to-read" className="navlist">Pages to Read</NavLink></li>
        <li><NavLink to="/authors" className="navlist">Authors</NavLink></li>
        <li><NavLink to="/ratings" className="navlist">Ratings</NavLink></li>
    </>

    return (
        <>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-base lg:text-xl">Book Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {user ?
                        <div className="flex gap-2 justify-center items-center">
                            <p className="lg:block hidden">{user.displayName}</p>
                            <button className="btn text-white bg-[#23BE0A]" onClick={handleLogout}>Log Out</button>

                        </div>


                        :
                        <div>
                            <Link to="/login" className="btn bg-[#23BE0A] text-white">Sign In</Link>
                            <Link to='/signup' className="btn bg-[#59C6D2] text-white">Sign Up</Link>

                        </div>}




                </div>
            </div>
        </>

    )
}
export default NavBar;