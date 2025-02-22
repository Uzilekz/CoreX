import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <div className="item-detail-image-container">
                <img
                    src={item.image}
                    alt={item.title}
                    className="item-detail-image"
                />
            </div>
            <div className="item-detail-info">
                <h2>{item.title}</h2>
                <p className="item-detail-description">{item.description}</p>
                <div className="item-detail-price">
                    <span>$</span> {item.price}
                </div>
                <button className="add-to-cart-btn">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;
