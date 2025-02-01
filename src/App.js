import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer saludo="¡Bienvenido a CoreX!" />
        </div>
    );
};

export default App;
