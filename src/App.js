import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/productos"
                        element={<ProductsPage />}
                    />
                    <Route
                        path="/category/:categoryId"
                        element={<ProductsPage />}
                    />
                    <Route
                        path="/item/:itemId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
