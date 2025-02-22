import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${itemId}`
                );
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error fetching item:", error);
            }
        };

        fetchItem();
    }, [itemId]);

    return (
        <div className="item-detail-container">
            {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;
