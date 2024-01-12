import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaShoppingCart, FaHome } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="navbar-cover">
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} />
                </div>
                <div className="navigate-links">
                    <NavLink to="/">
                        <FaHome className="home-link"/>
                    </NavLink>
                    <NavLink to="cart">
                        <FaShoppingCart className="cart-link"/>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}