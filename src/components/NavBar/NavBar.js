/* filepath: /C:/Users/Gerardo P.A/Desktop/Coding/CODERHOUSE/CoreX/src/components/NavBar/NavBar.js */
import React from "react";
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
                <img src={logo} alt="CoreX" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#home">Inicio</a>
                    </li>
                    <li>
                        <a href="#products">Productos</a>
                    </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
