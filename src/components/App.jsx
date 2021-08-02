import React from "react";
import Home from "./Home";
import './App.css';
import img from './img.png';

const App = () => {
    return (
        <div>
            <img src={img} alt="" />
            <h2 className="head">tees</h2>
            <Home />
        </div>
    );
};
export default App;
