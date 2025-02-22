import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import "./ProductsPage.css";

const ProductsPage = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                const data = await response.json();
                setItems(data);
                setFilteredItems(data); // Mostrar todos los productos por defecto
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    useEffect(() => {
        if (categoryId) {
            setActiveCategory(categoryId);
            setFilteredItems(
                items.filter((item) => item.category === categoryId)
            );
        } else {
            setActiveCategory("all");
            setFilteredItems(items);
        }
    }, [categoryId, items]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setFilteredItems(items);
        } else {
            setFilteredItems(
                items.filter((item) => item.category === category)
            );
        }
    };

    return (
        <div className="products-page">
            <h1 className="welcome-title">Explora nuestros productos</h1>
            <div className="category-buttons">
                <button
                    onClick={() => handleCategoryClick("all")}
                    className={activeCategory === "all" ? "active" : ""}
                >
                    Todos
                </button>
                <button
                    onClick={() => handleCategoryClick("men's clothing")}
                    className={
                        activeCategory === "men's clothing" ? "active" : ""
                    }
                >
                    Ropa de Hombre
                </button>
                <button
                    onClick={() => handleCategoryClick("women's clothing")}
                    className={
                        activeCategory === "women's clothing" ? "active" : ""
                    }
                >
                    Ropa de Mujer
                </button>
                <button
                    onClick={() => handleCategoryClick("jewelery")}
                    className={activeCategory === "jewelery" ? "active" : ""}
                >
                    Joyería
                </button>
                <button
                    onClick={() => handleCategoryClick("electronics")}
                    className={activeCategory === "electronics" ? "active" : ""}
                >
                    Electrónica
                </button>
            </div>
            {loading ? <p>Cargando...</p> : <ItemList items={filteredItems} />}
        </div>
    );
};

export default ProductsPage;
