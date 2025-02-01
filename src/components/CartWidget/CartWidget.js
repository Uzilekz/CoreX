import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaCartShopping />
        </div>
    );
};

export default CartWidget;
