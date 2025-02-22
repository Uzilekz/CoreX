import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
    const handleLogoClick = () => {
        const logoElement = document.querySelector(".logo img");
        logoElement.classList.add("rotate");
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
            logoElement.classList.remove("rotate");
        }, 1000); // Duración de la animación
    };

    return (
        <nav className="navbar">
            <div className="logo" onClick={handleLogoClick}>
                <NavLink to="/" exact>
                    <img src={logo} alt="CoreX" />
                </NavLink>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            exact
                            activeClassName="active"
                            className="nav-link"
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/productos"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Productos
                        </NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
