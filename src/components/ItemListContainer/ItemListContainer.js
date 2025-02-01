import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            {/* Aquí se mostrará el catálogo de productos en el futuro */}
        </div>
    );
};

export default ItemListContainer;
